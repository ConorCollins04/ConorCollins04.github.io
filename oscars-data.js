const CATEGORIES = [
  "Best Picture",
  "Best Actress",
  "Best Actor",
  "Best Supporting Actress",
  "Best Supporting Actor",
];

const OSCARS = {

  // ── 98th Academy Awards (March 15, 2026) ─────────────────────────────────
  2025: {
    ceremony: "98th Academy Awards",
    "Best Picture": [
      { film: "Sinners",                   rank: 3 },
      { film: "One Battle After Another",  winner: true,  rank: 2 },
      { film: "The Secret Agent",          rank: 10 },
      { film: "Sentimental Value",         rank: 5 },
      { film: "F1",                        rank: 9 },
      { film: "Hamnet",                    rank: 4 },
      { film: "Marty Supreme",             rank: 1 },
      { film: "Train Dreams",              rank: 6 },
      { film: "Bugonia",                   rank: 8 },
      { film: "Frankenstein",              rank: 7 },
    ],
    "Best Actress": [
      { name: "Emma Stone",        film: "Bugonia",                    rank: 3 },
      { name: "Rose Byrne",        film: "If I Had Legs I'd Kick You", notSeen: true },
      { name: "Jessie Buckley",    film: "Hamnet",       winner: true, rank: 1 },
      { name: "Kate Hudson",       film: "Song Sung Blue", notSeen: true },
      { name: "Renate Reinsve",    film: "Sentimental Value",          rank: 2 },
    ],
    "Best Actor": [
      { name: "Michael B. Jordan",  film: "Sinners",                  winner: true, rank: 2 },
      { name: "Timothée Chalamet",  film: "Marty Supreme",            rank: 1 },
      { name: "Ethan Hawke",        film: "Blue Moon",                rank: 4 },
      { name: "Leonardo DiCaprio",  film: "One Battle After Another", rank: 3 },
      { name: "Wagner Moura",       film: "The Secret Agent",         rank: 5 },
    ],
    "Best Supporting Actress": [
      { name: "Amy Madigan",            film: "Weapons",           winner: true, notSeen: true },
      { name: "Teyana Taylor",          film: "One Battle After Another", rank: 4 },
      { name: "Wunmi Mosaku",           film: "Sinners",           rank: 1 },
      { name: "Inga Ibsdotter Lilleaas", film: "Sentimental Value", rank: 2 },
      { name: "Elle Fanning",           film: "Sentimental Value", rank: 3 },
    ],
    "Best Supporting Actor": [
      { name: "Sean Penn",         film: "One Battle After Another", winner: true, rank: 5 },
      { name: "Benicio del Toro",  film: "One Battle After Another", rank: 1 },
      { name: "Stellan Skarsgård", film: "Sentimental Value",        rank: 2 },
      { name: "Delroy Lindo",      film: "Sinners",                  rank: 3 },
      { name: "Jacob Elordi",      film: "Frankenstein",             rank: 4 },
    ],
  },

  // ── 97th Academy Awards (March 2, 2025) ──────────────────────────────────
  2024: {
    ceremony: "97th Academy Awards",
    "Best Picture": [
      { film: "Anora",               winner: true,  rank: 3 },
      { film: "The Brutalist",                       rank: 8 },
      { film: "Conclave",                            rank: 6 },
      { film: "Emilia Pérez",                        rank: 9 },
      { film: "Nickel Boys",                         rank: 5 },
      { film: "A Complete Unknown",                  rank: 7 },
      { film: "I'm Still Here",                      rank: 2 },
      { film: "Dune: Part Two",                     rank: 4 },
      { film: "The Substance",       notSeen: true },
      { film: "Wicked",                             rank: 1 },
    ],
    "Best Actress": [
      { name: "Mikey Madison",       film: "Anora",              winner: true, rank: 3 },
      { name: "Fernanda Torres",     film: "I'm Still Here",     rank: 1 },
      { name: "Karla Sofía Gascón", film: "Emilia Pérez",       rank: 4 },
      { name: "Demi Moore",          film: "The Substance",      notSeen: true },
      { name: "Cynthia Erivo",       film: "Wicked",             rank: 2 },
    ],
    "Best Actor": [
      { name: "Adrien Brody",        film: "The Brutalist",      winner: true, rank: 5 },
      { name: "Ralph Fiennes",       film: "Conclave",           rank: 3 },
      { name: "Colman Domingo",      film: "Sing Sing",          rank: 1 },
      { name: "Timothée Chalamet",   film: "A Complete Unknown", rank: 2 },
      { name: "Sebastian Stan",      film: "The Apprentice",     rank: 4 },
    ],
    "Best Supporting Actress": [
      { name: "Isabella Rossellini", film: "Conclave",           rank: 2 },
      { name: "Felicity Jones",      film: "The Brutalist",      rank: 3 },
      { name: "Monica Barbaro",      film: "A Complete Unknown", rank: 4 },
      { name: "Zoe Saldana",         film: "Emilia Pérez",       winner: true, rank: 5 },
      { name: "Ariana Grande",       film: "Wicked",             rank: 1 },
    ],
    "Best Supporting Actor": [
      { name: "Kieran Culkin",       film: "A Real Pain",        winner: true, rank: 1 },
      { name: "Yura Borisov",        film: "Anora",              rank: 3 },
      { name: "Edward Norton",       film: "A Complete Unknown", rank: 5 },
      { name: "Jeremy Strong",       film: "The Apprentice",     rank: 2 },
      { name: "Guy Pearce",           film: "The Brutalist",      rank: 4 },
    ],
  },

  // ── 96th Academy Awards (March 10, 2024) ─────────────────────────────────
  2023: {
    ceremony: "96th Academy Awards",
    "Best Picture": [
      { film: "Oppenheimer",         winner: true,  rank: 8 },
      { film: "The Holdovers",                      rank: 5 },
      { film: "Anatomy of a Fall",                  rank: 1 },
      { film: "Past Lives",                         rank: 4 },
      { film: "Poor Things",                        rank: 6 },
      { film: "Killers of the Flower Moon",         rank: 7 },
      { film: "American Fiction",                   rank: 3 },
      { film: "Maestro",                            rank: 10 },
      { film: "The Zone of Interest",                rank: 9 },
      { film: "Barbie",                             rank: 2 },
    ],
    "Best Actress": [
      { name: "Lily Gladstone",      film: "Killers of the Flower Moon", rank: 1 },
      { name: "Sandra Hüller",       film: "Anatomy of a Fall",          rank: 2 },
      { name: "Emma Stone",          film: "Poor Things",     winner: true, rank: 3 },
      { name: "Annette Bening",      film: "Nyad",                        rank: 4 },
      { name: "Carey Mulligan",      film: "Maestro",                     rank: 5 },
    ],
    "Best Actor": [
      { name: "Cillian Murphy",      film: "Oppenheimer",     winner: true, rank: 4 },
      { name: "Paul Giamatti",       film: "The Holdovers",               rank: 1 },
      { name: "Colman Domingo",      film: "Rustin",                      rank: 3 },
      { name: "Bradley Cooper",      film: "Maestro",                     rank: 5 },
      { name: "Jeffrey Wright",      film: "American Fiction",            rank: 2 },
    ],
    "Best Supporting Actress": [
      { name: "Da'Vine Joy Randolph", film: "The Holdovers",  winner: true, rank: 1 },
      { name: "Emily Blunt",          film: "Oppenheimer",                 rank: 3 },
      { name: "America Ferrera",      film: "Barbie",                      rank: 2 },
      { name: "Danielle Brooks",      film: "The Color Purple",            notSeen: true },
      { name: "Jodie Foster",         film: "Nyad",                        rank: 4 },
    ],
    "Best Supporting Actor": [
      { name: "Robert Downey Jr.",   film: "Oppenheimer",     winner: true, rank: 5 },
      { name: "Ryan Gosling",        film: "Barbie",                      rank: 4 },
      { name: "Mark Ruffalo",        film: "Poor Things",                 rank: 1 },
      { name: "Sterling K. Brown",   film: "American Fiction",            rank: 3 },
      { name: "Robert De Niro",      film: "Killers of the Flower Moon",  rank: 2 },
    ],
  },

  // ── 95th Academy Awards (March 12, 2023) ─────────────────────────────────
  2022: {
    ceremony: "95th Academy Awards",
    "Best Picture": [
      { film: "Everything Everywhere All at Once", winner: true, rank: 1 },
      { film: "The Banshees of Inisherin",                      notSeen: true },
      { film: "Tár",                                            rank: 4 },
      { film: "The Fabelmans",                                  rank: 5 },
      { film: "All Quiet on the Western Front",                 notSeen: true },
      { film: "Women Talking",                                  notSeen: true },
      { film: "Elvis",                                          notSeen: true },
      { film: "Triangle of Sadness",                            rank: 2 },
      { film: "Avatar: The Way of Water",                       rank: 3 },
      { film: "Top Gun: Maverick",                              notSeen: true },
    ],
    "Best Actress": [
      { name: "Cate Blanchett",      film: "Tár",                         rank: 2 },
      { name: "Michelle Yeoh",       film: "Everything Everywhere All at Once", winner: true, rank: 1 },
      { name: "Michelle Williams",   film: "The Fabelmans",               rank: 3 },
      { name: "Andrea Riseborough",  film: "To Leslie",                   notSeen: true },
      { name: "Ana de Armas",        film: "Blonde",                      notSeen: true },
    ],
    "Best Actor": [
      { name: "Colin Farrell",       film: "The Banshees of Inisherin",   notSeen: true },
      { name: "Paul Mescal",         film: "Aftersun",                    rank: 1 },
      { name: "Austin Butler",       film: "Elvis",                       notSeen: true },
      { name: "Brendan Fraser",      film: "The Whale",       winner: true, notSeen: true },
      { name: "Bill Nighy",          film: "Living",                      notSeen: true },
    ],
    "Best Supporting Actress": [
      { name: "Kerry Condon",        film: "The Banshees of Inisherin",   notSeen: true },
      { name: "Stephanie Hsu",       film: "Everything Everywhere All at Once", rank: 1 },
      { name: "Hong Chau",           film: "The Whale",                   notSeen: true },
      { name: "Jamie Lee Curtis",    film: "Everything Everywhere All at Once", winner: true, rank: 3 },
      { name: "Angela Bassett",      film: "Black Panther: Wakanda Forever", rank: 2 },
    ],
    "Best Supporting Actor": [
      { name: "Barry Keoghan",       film: "The Banshees of Inisherin",   notSeen: true },
      { name: "Ke Huy Quan",         film: "Everything Everywhere All at Once", winner: true, rank: 1 },
      { name: "Brendan Gleeson",     film: "The Banshees of Inisherin",   notSeen: true },
      { name: "Brian Tyree Henry",   film: "Causeway",                    notSeen: true },
      { name: "Judd Hirsch",         film: "The Fabelmans",               rank: 2 },
    ],
  },

};
