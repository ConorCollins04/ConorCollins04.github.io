const ALL_STARS_SEASONS = SEASONS.filter(s => s.id <= 7);

let currentSeason = 1;
const castW = [], castM = [];
const MAX = 9;

function initials(name) {
  return name.split(" ").filter(w => w.length > 1).map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

function imgSlug(name) {
  return name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
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

function avatarHtml(name, seasonId, bgColor, fgColor) {
  const id = initials(name);
  return `<div class="avatar" style="background:${bgColor};color:${fgColor}" data-name="${name}" data-season="${seasonId}">
    <img alt="${name}">
    <span>${id}</span>
  </div>`;
}

function slotAvatarHtml(name, seasonId, bgColor, fgColor) {
  const id = initials(name);
  return `<div class="cast-slot-avatar" style="background:${bgColor};color:${fgColor}" data-name="${name}" data-season="${seasonId}">
    <img alt="${name}">
    <span>${id}</span>
  </div>`;
}
function isSelected(name) { return castW.includes(name) || castM.includes(name); }
function genderFull(g) { return g === "f" ? castW.length >= MAX : castM.length >= MAX; }

function renderTabs() {
  const el = document.getElementById("season-tabs");
  el.innerHTML = ALL_STARS_SEASONS.map(s =>
    `<button class="season-tab ${s.id === currentSeason ? "active" : ""}" data-season="${s.id}">S${s.id}</button>`
  ).join("");
  el.querySelectorAll(".season-tab").forEach(btn => {
    btn.addEventListener("click", () => { currentSeason = +btn.dataset.season; renderTabs(); renderPool(); });
  });
}

function renderPool() {
  const season = ALL_STARS_SEASONS.find(s => s.id === currentSeason);
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
              ${avatarHtml(p.name, season.id, sel ? "rgba(255,255,255,0.1)" : `${tribe.color}20`, sel ? "rgba(243,241,248,0.9)" : tribe.color)}
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
  document.querySelectorAll(".avatar[data-name]").forEach(el => {
    tryImage(el.querySelector("img"), el.dataset.name, el.dataset.season);
  });
}

function togglePlayer(name, gender) {
  const arr = gender === "f" ? castW : castM;
  const idx = arr.indexOf(name);
  if (idx > -1) arr.splice(idx, 1);
  else { if (arr.length >= MAX) return; arr.push(name); }
  renderPool(); renderPanel();
}

function renderPanel() {
  const wEl = document.getElementById("count-w");
  const mEl = document.getElementById("count-m");
  wEl.innerHTML = `Women: <span>${castW.length}</span>/9`;
  mEl.innerHTML = `Men: <span>${castM.length}</span>/9`;
  wEl.className = "cast-count" + (castW.length === MAX ? " full" : "");
  mEl.className = "cast-count" + (castM.length === MAX ? " full" : "");

  function slotsHtml(arr, gender) {
    return Array.from({ length: MAX }, (_, i) => {
      const name = arr[i];
      if (!name) return `<div class="cast-slot empty"><span class="cast-slot-empty-label">slot ${i + 1}</span></div>`;
      const { season, tribe } = PLAYER_INFO[name] || {};
      return `
        <div class="cast-slot">
          ${slotAvatarHtml(name, season?.id, `${tribe?.color ?? "#888"}20`, tribe?.color ?? "#888")}
          <div class="cast-slot-info">
            <div class="cast-slot-name">${name}</div>
            <div class="cast-slot-sub">S${season?.id} · ${season?.name ?? "?"}</div>
          </div>
          <button class="remove-btn" data-name="${name}" data-gender="${gender}">✕</button>
        </div>`;
    }).join("");
  }

  document.getElementById("slots-w").innerHTML = slotsHtml(castW, "f");
  document.getElementById("slots-m").innerHTML = slotsHtml(castM, "m");
  document.querySelectorAll(".cast-slot-avatar[data-name]").forEach(el => {
    tryImage(el.querySelector("img"), el.dataset.name, el.dataset.season);
  });
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => togglePlayer(btn.dataset.name, btn.dataset.gender));
  });
  const castFull = castW.length === MAX && castM.length === MAX;
  document.getElementById("continue-btn").disabled = !castFull;
}

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
  const allWomen = [], allMen = [];
  ALL_STARS_SEASONS.forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
    (p.gender === "f" ? allWomen : allMen).push(p.name);
  })));
  castW.length = 0; castM.length = 0;
  shuffle(allWomen).slice(0, MAX).forEach(n => castW.push(n));
  shuffle(allMen).slice(0, MAX).forEach(n => castM.push(n));
  renderPool(); renderPanel();
});

// ─── Tribe draft ────────────────────────────────────────────────────────────
const ALLSTAR_TRIBES = [
  { id: "chapera",  name: "Chapera",   color: "#BC080A", headerText: "#fff" },
  { id: "mogoMogo", name: "Mogo Mogo", color: "#3A663D", headerText: "#fff" },
  { id: "saboga",   name: "Saboga",    color: "#FFFF00", headerText: "#1a1624" },
];
const TRIBE_SIZE = 6;
const tribeAssignments = { chapera: [], mogoMogo: [], saboga: [] };
let draggedPlayer = null;
let tribeDropInitialized = false;

function getUnassigned() {
  const assigned = new Set(Object.values(tribeAssignments).flat());
  return [...castW, ...castM].filter(n => !assigned.has(n));
}

function movePlayer(name, destId) {
  if (destId) {
    const members = tribeAssignments[destId];
    if (members.length >= TRIBE_SIZE) return;
    const gender = PLAYER_INFO[name]?.gender;
    const genderCount = members.filter(n => PLAYER_INFO[n]?.gender === gender).length;
    if (genderCount >= 3) return;
  }
  ALLSTAR_TRIBES.forEach(t => {
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
    renderTribeDraft();
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
  el.addEventListener("dragend", () => {
    el.classList.remove("dragging");
    draggedPlayer = null;
  });
}

function renderTribeDraft() {
  const unassigned = getUnassigned();
  document.getElementById("unassigned-count").textContent = unassigned.length;
  const allAssigned = unassigned.length === 0;
  document.getElementById("tribes-subtitle").textContent = allAssigned
    ? "All 18 castaways assigned to tribes"
    : "Drag castaways into their tribes (or randomise)";
  document.getElementById("share-btn").disabled = !allAssigned;

  // Pool
  const poolGrid = document.getElementById("tribe-pool-grid");
  poolGrid.innerHTML = unassigned.length === 0
    ? '<span class="tribe-pool-empty">All players assigned ✓</span>'
    : "";
  unassigned.forEach(name => {
    const { season, tribe } = PLAYER_INFO[name] || {};
    const card = document.createElement("div");
    card.className = "player-card";
    const parts = name.split(" ");
    card.innerHTML = `
      ${avatarHtml(name, season?.id, `${tribe?.color ?? "#888"}20`, tribe?.color ?? "#888")}
      <div class="player-name">${parts[0]}<br><span class="player-name-last">${parts.slice(1).join(" ")}</span></div>`;
    card.querySelectorAll(".avatar[data-name]").forEach(a => tryImage(a.querySelector("img"), a.dataset.name, a.dataset.season));
    makeDraggable(card, name);
    poolGrid.appendChild(card);
  });

  // Tribe columns
  const colsEl = document.getElementById("tribe-columns");
  colsEl.innerHTML = "";
  ALLSTAR_TRIBES.forEach(t => {
    const members = tribeAssignments[t.id];
    const wCount = members.filter(n => PLAYER_INFO[n]?.gender === "f").length;
    const mCount = members.filter(n => PLAYER_INFO[n]?.gender === "m").length;
    const isFull = wCount === 3 && mCount === 3;
    const col = document.createElement("div");
    col.className = "tribe-col";
    col.innerHTML = `
      <div class="tribe-col-header">
        <div class="tribe-col-swatch" style="background:${t.color}"></div>
        <span class="tribe-col-name">${t.name}</span>
        <span class="tribe-col-count${isFull ? " full" : ""}">${wCount}/3 ♀ · ${mCount}/3 ♂</span>
      </div>
      <div class="tribe-col-body"></div>`;
    const body = col.querySelector(".tribe-col-body");
    for (let i = 0; i < TRIBE_SIZE; i++) {
      const name = members[i];
      if (name) {
        const { season, tribe } = PLAYER_INFO[name] || {};
        const row = document.createElement("div");
        row.className = "cast-slot";
        row.innerHTML = `
          ${slotAvatarHtml(name, season?.id, `${tribe?.color ?? "#888"}20`, tribe?.color ?? "#888")}
          <div class="cast-slot-info">
            <div class="cast-slot-name">${name}</div>
            <div class="cast-slot-sub">S${season?.id} · ${season?.name ?? "?"}</div>
          </div>`;
        row.querySelectorAll(".cast-slot-avatar[data-name]").forEach(a => tryImage(a.querySelector("img"), a.dataset.name, a.dataset.season));
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

function enterTribePhase() {
  const castSet = new Set([...castW, ...castM]);
  ALLSTAR_TRIBES.forEach(t => { tribeAssignments[t.id] = tribeAssignments[t.id].filter(n => castSet.has(n)); });
  document.getElementById("casting-layout").style.display = "none";
  document.getElementById("tribes-phase").style.display = "";
  if (!tribeDropInitialized) {
    setupDropZone(document.getElementById("tribe-pool-grid"), null);
    tribeDropInitialized = true;
  }
  renderTribeDraft();
}

function exitTribePhase() {
  document.getElementById("tribes-phase").style.display = "none";
  document.getElementById("casting-layout").style.display = "";
}

function randomizeTribes() {
  ALLSTAR_TRIBES.forEach(t => { tribeAssignments[t.id] = []; });
  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const women = shuffle([...castW]);
  const men = shuffle([...castM]);
  ALLSTAR_TRIBES.forEach((t, i) => {
    tribeAssignments[t.id] = [...women.slice(i * 3, i * 3 + 3), ...men.slice(i * 3, i * 3 + 3)];
  });
  renderTribeDraft();
}

// ─── Share view ─────────────────────────────────────────────────────────────
const ALL_PLAYERS = [];
ALL_STARS_SEASONS.forEach(s => s.tribes.forEach(t => t.players.forEach(p => ALL_PLAYERS.push(p.name))));

function encodeShare() {
  const idx = n => ALL_PLAYERS.indexOf(n);
  return "#t=" + ALLSTAR_TRIBES.map(t => tribeAssignments[t.id].map(idx).join(",")).join(".");
}

function decodeShare(hash) {
  if (!hash || !hash.startsWith("#t=")) return null;
  const parts = hash.slice(3).split(".");
  if (parts.length !== 3) return null;
  const used = new Set();
  const result = {};
  for (let i = 0; i < 3; i++) {
    const indices = parts[i].split(",").map(Number);
    if (indices.length !== 6 || indices.some(n => isNaN(n) || n < 0 || n >= ALL_PLAYERS.length || used.has(n))) return null;
    indices.forEach(n => used.add(n));
    result[ALLSTAR_TRIBES[i].id] = indices.map(n => ALL_PLAYERS[n]);
  }
  return result;
}

function renderShareView(assignments) {
  const colsEl = document.getElementById("share-tribe-columns");
  colsEl.innerHTML = "";
  ALLSTAR_TRIBES.forEach(t => {
    const members = assignments[t.id] || [];
    const col = document.createElement("div");
    col.className = "share-tribe-col";

    const header = document.createElement("div");
    header.className = "share-tribe-header";
    header.style.background = t.color;
    header.innerHTML = `
      <div class="share-tribe-name" style="color:${t.headerText}">${t.name}</div>
      `;
    col.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "share-player-grid";
    members.forEach(name => {
      const { season, tribe } = PLAYER_INFO[name] || {};
      const bgColor = `${tribe?.color ?? "#888"}22`;
      const fgColor = tribe?.color ?? "#888";
      const parts = name.split(" ");
      const card = document.createElement("div");
      card.className = "share-player-card";
      card.innerHTML = `
        <div class="share-player-photo" style="background:${bgColor};color:${fgColor}">
          <img alt="${name}">
          <span class="share-initials">${initials(name)}</span>
        </div>
        <div class="share-player-info">
          <div class="share-player-name">${parts[0]} <span class="share-player-name-last">${parts.slice(1).join(" ")}</span></div>
          <div class="share-player-season">${season?.name ?? "?"}</div>
        </div>`;
      tryImage(card.querySelector("img"), name, season?.id);
      grid.appendChild(card);
    });
    col.appendChild(grid);
    colsEl.appendChild(col);
  });
}

function showTribePhase() {
  document.getElementById("share-phase").style.display = "none";
  document.getElementById("tribes-phase").style.display = "";
  if (!tribeDropInitialized) {
    setupDropZone(document.getElementById("tribe-pool-grid"), null);
    tribeDropInitialized = true;
  }
  renderTribeDraft();
}

function enterSharePhase() {
  const hash = encodeShare();
  history.replaceState(null, "", hash);
  document.getElementById("tribes-phase").style.display = "none";
  document.getElementById("share-phase").style.display = "";
  renderShareView(tribeAssignments);
}

document.getElementById("share-btn").addEventListener("click", enterSharePhase);
document.getElementById("back-tribes-btn").addEventListener("click", showTribePhase);
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
  ALLSTAR_TRIBES.forEach(t => { tribeAssignments[t.id] = []; });
  tribeDropInitialized = false;
  renderPool(); renderPanel();
});

document.getElementById("continue-btn").addEventListener("click", enterTribePhase);
document.getElementById("back-cast-btn").addEventListener("click", exitTribePhase);
document.getElementById("randomize-btn").addEventListener("click", randomizeTribes);

// On load: check for share hash
const _decoded = decodeShare(location.hash);
if (_decoded) {
  // Populate state so "← edit tribes" works
  ALLSTAR_TRIBES.forEach(t => {
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
  renderTabs(); renderPool(); renderPanel();
}
