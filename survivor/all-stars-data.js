// ─── Return season config ────────────────────────────────────────────────────
const RETURN_SEASONS = [
  {
    id: "allstars",
    label: "All-Stars",
    castTitle: "All-Stars Casting",
    castSubtitle: "Draft your ideal 18-person all-star cast, with 9 men and 9 women",
    eligibleFilter: s => s.id >= 1 && s.id <= 7,
    castMax: 9,
    tribes: [
      { id: "chapera",  name: "Chapera",   color: "#BC080A", headerText: "#fff",     tagLabel: "Chap" },
      { id: "mogoMogo", name: "Mogo Mogo", color: "#3A663D", headerText: "#fff",     tagLabel: "Mogo" },
      { id: "saboga",   name: "Saboga",    color: "#FFFF00", headerText: "#1a1624",  tagLabel: "Sabo" },
    ],
    tribeSize: 6,
    genderPerTribe: 3,
    tribePhase: "drag",
    sharePlayerCols: 3,
    hashPrefix: "as",
    shareTitle: "Survivor: All-Stars",
    shareSubtitle: "Fan cast",
  },
  {
    id: "hvv",
    label: "Heroes vs. Villains",
    castTitle: "Heroes vs. Villains Casting",
    castSubtitle: "Draft your ideal 20-person cast, with 10 men and 10 women",
    eligibleFilter: s => s.id >= 1 && s.id <= 19,
    castMax: 10,
    tribes: [
      { id: "heroes",   name: "Heroes",   color: "#0066cc", headerText: "#fff", tagLabel: "Hero"    },
      { id: "villains", name: "Villains", color: "#cc0100", headerText: "#fff", tagLabel: "Villain" },
    ],
    tribeSize: 10,
    genderPerTribe: 5,
    tribePhase: "tag",
    sharePlayerCols: 5,
    hashPrefix: "hvv",
    shareTitle: "Survivor: Heroes vs. Villains",
    shareSubtitle: "Fan cast",
  },
];

// ─── State ───────────────────────────────────────────────────────────────────
let currentMode = "allstars";
let currentSeason = 1;
const castW = [], castM = [];
let tribeAssignments = {};
let draggedPlayer = null;
let tribeDropInitialized = false;

// ─── Mode helpers ────────────────────────────────────────────────────────────
function mode() { return RETURN_SEASONS.find(r => r.id === currentMode); }

function eligibleSeasons() {
  return SEASONS.filter(s => mode().eligibleFilter(s) && s.tribes.some(t => t.players.length > 0));
}

function buildTribeAssignments() {
  const obj = {};
  mode().tribes.forEach(t => { obj[t.id] = []; });
  return obj;
}

// ─── Image helpers ───────────────────────────────────────────────────────────
function initials(name) {
  return name.split(" ").filter(w => w.length > 1).map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

function imgSlug(name) {
  return name.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function tryImage(img, name, seasonId) {
  const slug = imgSlug(name);
  const base = `../images/survivor/s${seasonId}/${slug}`;
  img.src = `${base}.webp`;
  img.onerror = () => {
    img.onerror = () => { img.style.display = "none"; };
    img.src = `${base}.jpg`;
  };
  img.onload = () => {
    if (img.nextElementSibling) img.nextElementSibling.style.display = "none";
  };
}

function loadAvatarImages(container) {
  container.querySelectorAll(".avatar[data-name], .cast-slot-avatar[data-name]").forEach(el => {
    tryImage(el.querySelector("img"), el.dataset.name, el.dataset.season);
  });
}

// ─── HTML templates ──────────────────────────────────────────────────────────
function avatarHtml(name, seasonId, bgColor, fgColor) {
  return `<div class="avatar" style="background:${bgColor};color:${fgColor}" data-name="${name}" data-season="${seasonId}">
    <img alt="${name}"><span>${initials(name)}</span>
  </div>`;
}

function slotAvatarHtml(name, seasonId, bgColor, fgColor) {
  return `<div class="cast-slot-avatar" style="background:${bgColor};color:${fgColor}" data-name="${name}" data-season="${seasonId}">
    <img alt="${name}"><span>${initials(name)}</span>
  </div>`;
}

// ─── Cast state helpers ──────────────────────────────────────────────────────
function isSelected(name) { return castW.includes(name) || castM.includes(name); }
function genderFull(g) { return g === "f" ? castW.length >= mode().castMax : castM.length >= mode().castMax; }

// Returns the display info for a player constrained to the current mode's eligible seasons.
// primary: most recent eligible appearance (season + tribe for colours/image lookup)
// seasonLabel: "S4 · Marquesas" for a single appearance, "S4 · S8" for multiple
function playerDisplay(name) {
  const all = PLAYER_SEASONS[name] || [];
  const eligible = all.filter(a =>
    mode().eligibleFilter(a.season) && a.season.tribes.some(t => t.players.length > 0)
  );
  const primary = eligible.length > 0 ? eligible[eligible.length - 1] : all[all.length - 1];
  const seasonLabel = eligible.length <= 1
    ? `S${primary?.season?.id} · ${primary?.season?.name ?? "?"}`
    : eligible.map(a => `S${a.season.id} · ${a.season.name}`).join("<br>");
  return { primary, seasonLabel };
}

// ─── Mode tabs ───────────────────────────────────────────────────────────────
function renderModeTabs() {
  const el = document.getElementById("mode-tabs");
  el.innerHTML = RETURN_SEASONS.map(r =>
    `<button class="season-tab ${r.id === currentMode ? "active" : ""}" data-mode="${r.id}">${r.label}</button>`
  ).join("");
  el.querySelectorAll("[data-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.mode === currentMode) return;
      currentMode = btn.dataset.mode;
      castW.length = 0; castM.length = 0;
      tribeAssignments = buildTribeAssignments();
      tribeDropInitialized = false;
      currentSeason = eligibleSeasons()[0]?.id ?? 1;
      history.replaceState(null, "", location.pathname);
      updateCastingHeader();
      renderModeTabs();
      renderTabs();
      renderPool();
      renderPanel();
    });
  });
}

function updateCastingHeader() {
  document.getElementById("pool-title").textContent = mode().castTitle;
  document.getElementById("pool-subtitle").textContent = mode().castSubtitle;
}

// ─── Season tabs ─────────────────────────────────────────────────────────────
function renderTabs() {
  const el = document.getElementById("season-tabs");
  el.innerHTML = eligibleSeasons().map(s =>
    `<button class="season-tab ${s.id === currentSeason ? "active" : ""}" data-season="${s.id}">S${s.id}</button>`
  ).join("");
  el.querySelectorAll(".season-tab").forEach(btn => {
    btn.addEventListener("click", () => { currentSeason = +btn.dataset.season; renderTabs(); renderPool(); });
  });
}

// ─── Player pool ─────────────────────────────────────────────────────────────
function renderPool() {
  const season = eligibleSeasons().find(s => s.id === currentSeason);
  document.getElementById("season-heading").innerHTML = `
    <h2>${season.name}</h2>
    <p>${season.year} · ${season.tribes.reduce((n, t) => n + t.players.length, 0)} players</p>
  `;
  document.getElementById("player-pool").innerHTML = season.tribes.map(tribe => `
    <div class="tribe-section">
      <div class="tribe-label">
        <div class="tribe-swatch" style="background:${tribe.color}"></div>
        <span class="tribe-name">${tribe.name}</span>
      </div>
      <div class="player-grid">
        ${tribe.players.map(p => {
          const sel  = isSelected(p.name);
          const full = !sel && genderFull(p.gender);
          const parts = p.name.split(" ");
          return `
            <div class="player-card ${sel ? "selected" : ""} ${full ? "disabled" : ""}"
                 data-name="${p.name}" data-gender="${p.gender}">
              ${avatarHtml(p.name, season.id,
                sel  ? "rgba(255,255,255,0.1)" : `${tribe.color}20`,
                sel  ? "rgba(243,241,248,0.9)" : tribe.color)}
              <div class="player-name">
                ${parts[0]}<br><span class="player-name-last">${parts.slice(1).join(" ")}</span>
              </div>
              <div class="check-mark">✓ picked</div>
            </div>`;
        }).join("")}
      </div>
    </div>
  `).join("");
  document.querySelectorAll(".player-card:not(.disabled)").forEach(card => {
    card.addEventListener("click", () => togglePlayer(card.dataset.name, card.dataset.gender));
  });
  loadAvatarImages(document.getElementById("player-pool"));
}

function togglePlayer(name, gender) {
  const arr = gender === "f" ? castW : castM;
  const idx = arr.indexOf(name);
  if (idx > -1) arr.splice(idx, 1);
  else { if (arr.length >= mode().castMax) return; arr.push(name); }
  renderPool(); renderPanel();
}

// ─── Cast panel ──────────────────────────────────────────────────────────────
function renderPanel() {
  const MAX = mode().castMax;
  const wEl = document.getElementById("count-w");
  const mEl = document.getElementById("count-m");
  wEl.innerHTML = `Women: <span>${castW.length}</span>/${MAX}`;
  mEl.innerHTML = `Men: <span>${castM.length}</span>/${MAX}`;
  wEl.className = "cast-count" + (castW.length === MAX ? " full" : "");
  mEl.className = "cast-count" + (castM.length === MAX ? " full" : "");

  function slotsHtml(arr, gender) {
    return Array.from({ length: MAX }, (_, i) => {
      const name = arr[i];
      if (!name) return `<div class="cast-slot empty"><span class="cast-slot-empty-label">slot ${i + 1}</span></div>`;
      const { primary, seasonLabel } = playerDisplay(name);
      return `
        <div class="cast-slot">
          ${slotAvatarHtml(name, primary?.season?.id, `${primary?.tribe?.color ?? "#888"}20`, primary?.tribe?.color ?? "#888")}
          <div class="cast-slot-info">
            <div class="cast-slot-name">${name}</div>
            <div class="cast-slot-sub">${seasonLabel}</div>
          </div>
          <button class="remove-btn" data-name="${name}" data-gender="${gender}">✕</button>
        </div>`;
    }).join("");
  }

  document.getElementById("slots-w").innerHTML = slotsHtml(castW, "f");
  document.getElementById("slots-m").innerHTML = slotsHtml(castM, "m");
  loadAvatarImages(document.querySelector(".cast-panel"));
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => togglePlayer(btn.dataset.name, btn.dataset.gender));
  });
  document.getElementById("continue-btn").disabled = !(castW.length === MAX && castM.length === MAX);
}

// ─── Casting layout buttons ──────────────────────────────────────────────────
document.getElementById("reset-btn").addEventListener("click", () => {
  castW.length = 0; castM.length = 0; renderPool(); renderPanel();
});

document.getElementById("randomize-cast-btn").addEventListener("click", () => {
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const seen = new Set();
  const allWomen = [], allMen = [];
  eligibleSeasons().forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
    if (!seen.has(p.name)) {
      seen.add(p.name);
      (p.gender === "f" ? allWomen : allMen).push(p.name);
    }
  })));
  const MAX = mode().castMax;
  castW.length = 0; castM.length = 0;
  shuffle(allWomen).slice(0, MAX).forEach(n => castW.push(n));
  shuffle(allMen).slice(0, MAX).forEach(n => castM.push(n));
  renderPool(); renderPanel();
});

document.getElementById("continue-btn").addEventListener("click", () => {
  if (mode().tribePhase === "drag") enterDragPhase();
  else enterTagPhase();
});

// ─── Drag phase ──────────────────────────────────────────────────────────────
function getUnassigned() {
  const assigned = new Set(Object.values(tribeAssignments).flat());
  return [...castW, ...castM].filter(n => !assigned.has(n));
}

function movePlayer(name, destId) {
  const m = mode();
  if (destId) {
    const members = tribeAssignments[destId];
    if (members.length >= m.tribeSize) return;
    const gender = PLAYER_INFO[name]?.gender;
    if (members.filter(n => PLAYER_INFO[n]?.gender === gender).length >= m.genderPerTribe) return;
  }
  m.tribes.forEach(t => {
    const i = tribeAssignments[t.id].indexOf(name);
    if (i > -1) tribeAssignments[t.id].splice(i, 1);
  });
  if (destId) tribeAssignments[destId].push(name);
}

function setupDropZone(el, destId) {
  el.addEventListener("dragover", e => { e.preventDefault(); el.classList.add("drag-over"); });
  el.addEventListener("dragleave", e => { if (!el.contains(e.relatedTarget)) el.classList.remove("drag-over"); });
  el.addEventListener("drop", e => {
    e.preventDefault();
    el.classList.remove("drag-over");
    if (!draggedPlayer) return;
    movePlayer(draggedPlayer, destId);
    draggedPlayer = null;
    renderDraft();
  });
}

function makeDraggable(el, name) {
  el.draggable = true;
  el.classList.add("draggable");
  el.addEventListener("dragstart", e => {
    draggedPlayer = name;
    e.dataTransfer.effectAllowed = "move";
    requestAnimationFrame(() => el.classList.add("dragging"));
  });
  el.addEventListener("dragend", () => { el.classList.remove("dragging"); draggedPlayer = null; });
}

function renderDraft() {
  const m = mode();
  const unassigned = getUnassigned();
  document.getElementById("unassigned-count").textContent = unassigned.length;
  const allAssigned = unassigned.length === 0;
  document.getElementById("tribes-subtitle").textContent = allAssigned
    ? `All ${castW.length + castM.length} castaways assigned to tribes`
    : "Drag castaways into their tribes (or randomise)";
  document.getElementById("share-btn").disabled = !allAssigned;

  const poolGrid = document.getElementById("tribe-pool-grid");
  poolGrid.innerHTML = unassigned.length === 0
    ? '<span class="tribe-pool-empty">All players assigned ✓</span>'
    : "";
  unassigned.forEach(name => {
    const { primary } = playerDisplay(name);
    const parts = name.split(" ");
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
      ${avatarHtml(name, primary?.season?.id, `${primary?.tribe?.color ?? "#888"}20`, primary?.tribe?.color ?? "#888")}
      <div class="player-name">${parts[0]}<br><span class="player-name-last">${parts.slice(1).join(" ")}</span></div>`;
    loadAvatarImages(card);
    makeDraggable(card, name);
    poolGrid.appendChild(card);
  });

  const colsEl = document.getElementById("tribe-columns");
  colsEl.style.gridTemplateColumns = `repeat(${m.tribes.length}, 1fr)`;
  colsEl.innerHTML = "";
  m.tribes.forEach(t => {
    const members = tribeAssignments[t.id];
    const gpt = m.genderPerTribe;
    const wCount = members.filter(n => PLAYER_INFO[n]?.gender === "f").length;
    const mCount = members.filter(n => PLAYER_INFO[n]?.gender === "m").length;
    const isFull = wCount === gpt && mCount === gpt;
    const col = document.createElement("div");
    col.className = "tribe-col";
    col.innerHTML = `
      <div class="tribe-col-header">
        <div class="tribe-col-swatch" style="background:${t.color}"></div>
        <span class="tribe-col-name">${t.name}</span>
        <span class="tribe-col-count${isFull ? " full" : ""}">${wCount}/${gpt} ♀ · ${mCount}/${gpt} ♂</span>
      </div>
      <div class="tribe-col-body"></div>`;
    const body = col.querySelector(".tribe-col-body");
    for (let i = 0; i < m.tribeSize; i++) {
      const name = members[i];
      if (name) {
        const { primary, seasonLabel } = playerDisplay(name);
        const row = document.createElement("div");
        row.className = "cast-slot";
        row.innerHTML = `
          ${slotAvatarHtml(name, primary?.season?.id, `${primary?.tribe?.color ?? "#888"}20`, primary?.tribe?.color ?? "#888")}
          <div class="cast-slot-info">
            <div class="cast-slot-name">${name}</div>
            <div class="cast-slot-sub">${seasonLabel}</div>
          </div>`;
        loadAvatarImages(row);
        makeDraggable(row, name);
        body.appendChild(row);
      } else {
        const slot = document.createElement("div");
        slot.className = "cast-slot empty";
        slot.innerHTML = `<span class="cast-slot-empty-label">slot ${i + 1}</span>`;
        body.appendChild(slot);
      }
    }
    setupDropZone(col, t.id);
    colsEl.appendChild(col);
  });
}

function enterDragPhase() {
  const castSet = new Set([...castW, ...castM]);
  mode().tribes.forEach(t => { tribeAssignments[t.id] = tribeAssignments[t.id].filter(n => castSet.has(n)); });
  document.getElementById("casting-layout").style.display = "none";
  document.getElementById("tribes-phase").style.display = "";
  if (!tribeDropInitialized) {
    setupDropZone(document.getElementById("tribe-pool-grid"), null);
    tribeDropInitialized = true;
  }
  renderDraft();
}

function exitDragPhase() {
  document.getElementById("tribes-phase").style.display = "none";
  document.getElementById("casting-layout").style.display = "";
}

function randomizeDrag() {
  const m = mode();
  m.tribes.forEach(t => { tribeAssignments[t.id] = []; });
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const gpt = m.genderPerTribe;
  const women = shuffle([...castW]);
  const men   = shuffle([...castM]);
  m.tribes.forEach((t, i) => {
    tribeAssignments[t.id] = [
      ...women.slice(i * gpt, (i + 1) * gpt),
      ...men.slice(i * gpt, (i + 1) * gpt),
    ];
  });
  renderDraft();
}

document.getElementById("back-cast-btn").addEventListener("click", exitDragPhase);
document.getElementById("randomize-btn").addEventListener("click", randomizeDrag);
document.getElementById("share-btn").addEventListener("click", enterSharePhase);

// ─── Tag phase ───────────────────────────────────────────────────────────────
function renderTagPhase() {
  const m = mode();
  const allCast = [...castW, ...castM];

  const allAssigned = allCast.length > 0 && m.tribes.every(t => {
    const members = tribeAssignments[t.id];
    return members.length === m.tribeSize
      && members.filter(n => PLAYER_INFO[n]?.gender === "f").length === m.genderPerTribe
      && members.filter(n => PLAYER_INFO[n]?.gender === "m").length === m.genderPerTribe;
  });

  document.getElementById("tag-subtitle").textContent = allAssigned
    ? `All ${allCast.length} castaways assigned`
    : "Click a role to assign each castaway";
  document.getElementById("tag-share-btn").disabled = !allAssigned;

  // Tribe bar
  const bar = document.getElementById("tag-tribe-bar");
  bar.innerHTML = m.tribes.map(t => {
    const members = tribeAssignments[t.id];
    const wCount = members.filter(n => PLAYER_INFO[n]?.gender === "f").length;
    const mCount = members.filter(n => PLAYER_INFO[n]?.gender === "m").length;
    const full = members.length === m.tribeSize;
    return `<div class="tag-tribe-stat">
      <div class="tag-tribe-dot" style="background:${t.color}"></div>
      <span class="tag-tribe-label${full ? " full" : ""}">
        ${t.name}: <span>${members.length}</span>/${m.tribeSize}
        <span class="tag-tribe-gender"> · ${wCount}/${m.genderPerTribe} ♀ · ${mCount}/${m.genderPerTribe} ♂</span>
      </span>
    </div>`;
  }).join("");

  // Player grid
  const grid = document.getElementById("tag-grid");
  grid.innerHTML = "";

  allCast.forEach(name => {
    const { primary } = playerDisplay(name);
    const parts = name.split(" ");
    const assignedTribe = m.tribes.find(t => tribeAssignments[t.id].includes(name));

    const card = document.createElement("div");
    card.className = "tag-card";
    if (assignedTribe) {
      card.style.borderColor = assignedTribe.color;
      card.style.background = `${assignedTribe.color}12`;
    }

    const bgColor = assignedTribe ? `${assignedTribe.color}30` : `${primary?.tribe?.color ?? "#888"}20`;
    const fgColor = assignedTribe ? assignedTribe.color : (primary?.tribe?.color ?? "#888");

    const gender = PLAYER_INFO[name]?.gender;
    const btnsHtml = m.tribes.map(t => {
      const isActive = tribeAssignments[t.id].includes(name);
      const genderCount = tribeAssignments[t.id].filter(n => PLAYER_INFO[n]?.gender === gender).length;
      const blocked = !isActive && genderCount >= m.genderPerTribe;
      return `<button class="tag-btn${isActive ? " active" : ""}"
        data-tribe="${t.id}" data-name="${name}"
        ${blocked ? "disabled" : ""}
        style="${isActive ? `background:${t.color}` : ""}"
      >${t.tagLabel}</button>`;
    }).join("");

    card.innerHTML = `
      ${avatarHtml(name, primary?.season?.id, bgColor, fgColor)}
      <div class="tag-card-name">
        ${parts[0]}<br><span class="tag-card-name-last">${parts.slice(1).join(" ")}</span>
      </div>
      <div class="tag-btns">${btnsHtml}</div>`;

    loadAvatarImages(card);
    card.querySelectorAll(".tag-btn:not([disabled])").forEach(btn => {
      btn.addEventListener("click", () => {
        const tribeId = btn.dataset.tribe;
        const already = tribeAssignments[tribeId].includes(name);
        m.tribes.forEach(t => {
          const i = tribeAssignments[t.id].indexOf(name);
          if (i > -1) tribeAssignments[t.id].splice(i, 1);
        });
        if (!already) tribeAssignments[tribeId].push(name);
        renderTagPhase();
      });
    });
    grid.appendChild(card);
  });
}

function enterTagPhase() {
  const castSet = new Set([...castW, ...castM]);
  mode().tribes.forEach(t => { tribeAssignments[t.id] = tribeAssignments[t.id].filter(n => castSet.has(n)); });
  document.getElementById("casting-layout").style.display = "none";
  document.getElementById("tag-phase").style.display = "";
  renderTagPhase();
}

function exitTagPhase() {
  document.getElementById("tag-phase").style.display = "none";
  document.getElementById("casting-layout").style.display = "";
}

function randomizeTag() {
  const m = mode();
  m.tribes.forEach(t => { tribeAssignments[t.id] = []; });
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const gpt = m.genderPerTribe;
  const women = shuffle([...castW]);
  const men   = shuffle([...castM]);
  m.tribes.forEach((t, i) => {
    tribeAssignments[t.id] = [
      ...women.slice(i * gpt, (i + 1) * gpt),
      ...men.slice(i * gpt, (i + 1) * gpt),
    ];
  });
  renderTagPhase();
}

document.getElementById("tag-back-btn").addEventListener("click", exitTagPhase);
document.getElementById("tag-randomize-btn").addEventListener("click", randomizeTag);
document.getElementById("tag-share-btn").addEventListener("click", enterSharePhase);

// ─── Share view ──────────────────────────────────────────────────────────────
function getSharePlayerList() {
  const seen = new Set();
  const arr = [];
  eligibleSeasons().forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
    if (!seen.has(p.name)) { seen.add(p.name); arr.push(p.name); }
  })));
  return arr;
}

function encodeShare() {
  const players = getSharePlayerList();
  const idx = n => players.indexOf(n);
  return `#${mode().hashPrefix}=` + mode().tribes.map(t => tribeAssignments[t.id].map(idx).join(",")).join(".");
}

function decodeShare(hash) {
  if (!hash) return null;
  for (const r of RETURN_SEASONS) {
    const prefix = `#${r.hashPrefix}=`;
    if (!hash.startsWith(prefix)) continue;
    const seen = new Set();
    const players = [];
    SEASONS.filter(s => r.eligibleFilter(s) && s.tribes.some(t => t.players.length > 0))
      .forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
        if (!seen.has(p.name)) { seen.add(p.name); players.push(p.name); }
      })));
    const parts = hash.slice(prefix.length).split(".");
    if (parts.length !== r.tribes.length) continue;
    const used = new Set();
    const result = { modeId: r.id };
    let valid = true;
    for (let i = 0; i < r.tribes.length; i++) {
      const indices = parts[i].split(",").map(Number);
      if (indices.length !== r.tribeSize || indices.some(n => isNaN(n) || n < 0 || n >= players.length || used.has(n))) {
        valid = false; break;
      }
      indices.forEach(n => used.add(n));
      result[r.tribes[i].id] = indices.map(n => players[n]);
    }
    if (valid) return result;
  }
  return null;
}

function renderShareView(assignments) {
  const m = mode();
  document.getElementById("share-title").textContent = m.shareTitle;
  document.getElementById("share-subtitle").textContent = m.shareSubtitle;

  const colsEl = document.getElementById("share-tribe-columns");
  colsEl.style.gridTemplateColumns = `repeat(${m.tribes.length}, 1fr)`;
  colsEl.innerHTML = "";
  m.tribes.forEach(t => {
    const members = assignments[t.id] || [];
    const col = document.createElement("div");
    col.className = "share-tribe-col";

    const header = document.createElement("div");
    header.className = "share-tribe-header";
    header.style.background = t.color;
    header.innerHTML = `<div class="share-tribe-name" style="color:${t.headerText}">${t.name}</div>`;
    col.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "share-player-grid";
    grid.style.gridTemplateColumns = `repeat(${m.sharePlayerCols}, 1fr)`;
    members.forEach(name => {
      const { primary, seasonLabel } = playerDisplay(name);
      const parts = name.split(" ");
      const card = document.createElement("div");
      card.className = "share-player-card";
      card.innerHTML = `
        <div class="share-player-photo" style="background:${primary?.tribe?.color ?? "#888"}22;color:${primary?.tribe?.color ?? "#888"}">
          <img alt="${name}">
          <span class="share-initials">${initials(name)}</span>
        </div>
        <div class="share-player-info">
          <div class="share-player-name">${parts[0]} <span class="share-player-name-last">${parts.slice(1).join(" ")}</span></div>
          <div class="share-player-season">${seasonLabel}</div>
        </div>`;
      tryImage(card.querySelector("img"), name, primary?.season?.id);
      grid.appendChild(card);
    });
    col.appendChild(grid);
    colsEl.appendChild(col);
  });
}

function enterSharePhase() {
  history.replaceState(null, "", encodeShare());
  document.getElementById("tribes-phase").style.display = "none";
  document.getElementById("tag-phase").style.display = "none";
  document.getElementById("share-phase").style.display = "";
  renderShareView(tribeAssignments);
}

function showAssignmentPhase() {
  document.getElementById("share-phase").style.display = "none";
  if (mode().tribePhase === "drag") {
    document.getElementById("tribes-phase").style.display = "";
    if (!tribeDropInitialized) {
      setupDropZone(document.getElementById("tribe-pool-grid"), null);
      tribeDropInitialized = true;
    }
    renderDraft();
  } else {
    document.getElementById("tag-phase").style.display = "";
    renderTagPhase();
  }
}

document.getElementById("back-tribes-btn").addEventListener("click", showAssignmentPhase);
document.getElementById("copy-link-btn").addEventListener("click", () => {
  navigator.clipboard.writeText(location.href).then(() => {
    const btn = document.getElementById("copy-link-btn");
    const orig = btn.textContent;
    btn.textContent = "✓ copied!";
    setTimeout(() => { btn.textContent = orig; }, 2000);
  });
});
document.getElementById("build-own-btn").addEventListener("click", () => {
  history.replaceState(null, "", location.pathname);
  document.getElementById("share-phase").style.display = "none";
  document.getElementById("casting-layout").style.display = "";
  castW.length = 0; castM.length = 0;
  tribeAssignments = buildTribeAssignments();
  tribeDropInitialized = false;
  updateCastingHeader();
  renderModeTabs();
  renderTabs();
  renderPool();
  renderPanel();
});

// ─── Init ────────────────────────────────────────────────────────────────────
tribeAssignments = buildTribeAssignments();

const _decoded = decodeShare(location.hash);
if (_decoded) {
  currentMode = _decoded.modeId;
  tribeAssignments = buildTribeAssignments();
  mode().tribes.forEach(t => {
    tribeAssignments[t.id] = _decoded[t.id];
    _decoded[t.id].forEach(name => {
      const g = PLAYER_INFO[name]?.gender;
      (g === "f" ? castW : castM).push(name);
    });
  });
  document.getElementById("casting-layout").style.display = "none";
  document.getElementById("share-phase").style.display = "";
  renderShareView(_decoded);
} else {
  updateCastingHeader();
  renderModeTabs();
  renderTabs();
  renderPool();
  renderPanel();
}
