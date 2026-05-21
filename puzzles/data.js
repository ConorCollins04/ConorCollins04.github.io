const PUZZLES = [
  // ── Rat Run ──────────────────────────────────────────────────────────────

  // Phase 1
  { name: "Primer",          url: "", group: "Rat Run", experiment: 1,  codename: "PURPLE",  color: "#7952B3", darkText: false },
  { name: "Tenacity",        url: "", group: "Rat Run", experiment: 2,  codename: "BEIGE",   color: "#D4B896", darkText: true  },
  { name: "Double Dutch",    url: "", group: "Rat Run", experiment: 3,  codename: "ORANGE",  color: "#E8933A", darkText: false },
  { name: "Borderline",      url: "", group: "Rat Run", experiment: 4,  codename: "BLUE",    color: "#5BA4CF", darkText: false },
  { name: "Disparity",       url: "", group: "Rat Run", experiment: 5,  codename: "RED",     color: "#CC2222", darkText: false },
  { name: "Equilibrium",     url: "", group: "Rat Run", experiment: 6,  codename: "OLIVE",   color: "#697A3A", darkText: false },
  { name: "Multiple Choice", url: "", group: "Rat Run", experiment: 7,  codename: "BLACK",   color: "#1A1A1A", darkText: false },
  { name: "Discontinuous",   url: "", group: "Rat Run", experiment: 8,  codename: "GOLD",    color: "#B89520", darkText: false },
  { name: "Shock Value",     url: "", group: "Rat Run", experiment: 9,  codename: "CRIMSON", color: "#C0243C", darkText: false },
  { name: "Sensored",        url: "", group: "Rat Run", experiment: 10, codename: "LIME",    color: "#C8D86A", darkText: true  },
  // Phase 2
  { name: "Limited Addition",    url: "", group: "Rat Run", experiment: 11, codename: "INDIGO",    color: "#4B0082", darkText: false },
  { name: "Visiting Order",      url: "", group: "Rat Run", experiment: 12, codename: "TEAL",      color: "#2D9E8C", darkText: false },
  { name: "Triskaidekaphilia",   url: "", group: "Rat Run", experiment: 13, codename: "BRONZE",    color: "#A87C2A", darkText: false },
  { name: "Thermoregulation",    url: "", group: "Rat Run", experiment: 14, codename: "SLATE",     color: "#5E6B80", darkText: false },
  { name: "Connectedness",       url: "", group: "Rat Run", experiment: 15, codename: "MAGENTA",   color: "#D42BAA", darkText: false },
  { name: "Schrödinger's Rat",   url: "", group: "Rat Run", experiment: 16, codename: "TURQUOISE", color: "#4CC8C8", darkText: true  },
  { name: "Trapdoors",           url: "", group: "Rat Run", experiment: 17, codename: "PEACH",     color: "#EDB88C", darkText: true  },
  { name: "Mirror Maze",         url: "", group: "Rat Run", experiment: 18, codename: "GREEN",     color: "#38A848", darkText: false },
  { name: "Brainwaves",          url: "", group: "Rat Run", experiment: 19, codename: "MAROON",    color: "#7A1818", darkText: false },
  { name: "Gifted",              url: "", group: "Rat Run", experiment: 20, codename: "WHITE",     color: "#F0F0E8", darkText: true,  bordered: true  },

  { name: "51 Years Later", url: "", group: "Rat Run", special: true, color: "#6870C4" },

  // Phase 3
  { name: "Friendly",             url: "", group: "Rat Run", experiment: 21, codename: "PINK",     color: "#F080C0", darkText: false },
  { name: "Copyrat",              url: "", group: "Rat Run", experiment: 22, codename: "CYAN",     color: "#3EC4F0", darkText: false },
  { name: "Notable Differences",  url: "", group: "Rat Run", experiment: 23, codename: "AMBER",    color: "#C89820", darkText: false },
  { name: "Between You and Me",   url: "", group: "Rat Run", experiment: 24, codename: "MINT",     color: "#8EDCC8", darkText: true  },
  { name: "Mod Cons",             url: "", group: "Rat Run", experiment: 25, codename: "CERULEAN", color: "#3A90C8", darkText: false },
  { name: "Hit and Miss",         url: "", group: "Rat Run", experiment: 26, codename: "TAN",      color: "#B09050", darkText: false },
  { name: "Productivity",         url: "", group: "Rat Run", experiment: 27, codename: "BROWN",    color: "#5A3A18", darkText: false },
  { name: "Hypothesis",           url: "", group: "Rat Run", experiment: 28, codename: "VIOLET",   color: "#7040C8", darkText: false },
  { name: "Counterbalance",       url: "", group: "Rat Run", experiment: 29, codename: "KHAKI",    color: "#909040", darkText: false },
  { name: "Star Rats",            url: "", group: "Rat Run", experiment: 30, codename: "SILVER",   color: "#B0B8C8", darkText: false },
  { name: "Equivalence",          url: "", group: "Rat Run", experiment: 31, codename: "VIRIDIAN", color: "#2A9060", darkText: false },
  { name: "Veracity",             url: "", group: "Rat Run", experiment: 32, codename: "NAVY",     color: "#1A2878", darkText: false },
  { name: "Hot and Cold",        url: "", group: "Rat Run", experiment: 33, codename: "MAUVE",     color: "#7A3868", darkText: false },
  { name: "On Reflection",       url: "", group: "Rat Run", experiment: 34, codename: "AQUA",      color: "#3ECEB4", darkText: false },
  { name: "Locked Out",          url: "", group: "Rat Run", experiment: 35, codename: "GREY",      color: "#5E6878", darkText: false },
  { name: "Alternating Currant", url: "", group: "Rat Run", experiment: 36, codename: "LAVENDER",  color: "#A888D4", darkText: false },
  
  { name: "One Year Earlier", url: "", group: "Rat Run", special: true, color: "#E0D4A8", darkText: true },

  { name: "Fruitful",            url: "", group: "Rat Run", experiment: 37, codename: "BURGUNDY",  color: "#6B1030", darkText: false },
  { name: "Synchronicity",       url: "", group: "Rat Run", experiment: 38, codename: "YELLOW",    color: "#EAEA48", darkText: true,  bordered: true },
  { name: "Together Apart",      url: "", group: "Rat Run", experiment: 39, codename: "VERMILION", color: "#CC4420", darkText: false, completed: false },

  // ── Puzzled Pint ─────────────────────────────────────────────────────────
  // { name: "...", url: "https://...", group: "Puzzled Pint" },

  // ── Jane Street ──────────────────────────────────────────────────────────
  // { name: "...", url: "https://...", group: "Jane Street" },

  // ── Other Hunt ───────────────────────────────────────────────────────────
  // { name: "...", url: "https://...", group: "Other Hunt" },
];
