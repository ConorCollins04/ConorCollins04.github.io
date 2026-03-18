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
      { film: "Sinners",                   rank: 1 },
      { film: "One Battle After Another",  winner: true,  rank: 2 },
      { film: "The Secret Agent",          rank: 3 },
      { film: "Sentimental Value",         rank: 4 },
      { film: "F1",                        rank: 5 },
      { film: "Hamnet",                    rank: 6 },
      { film: "Marty Supreme",             rank: 7 },
      { film: "Train Dreams",              rank: 8 },
      { film: "Bugonia",                   rank: 9 },
      { film: "Frankenstein",              rank: 10 },
    ],
    "Best Actress": [
      { name: "Emma Stone",        film: "Bugonia",                    rank: 1 },
      { name: "Rose Byrne",        film: "If I Had Legs I'd Kick You", rank: 2 },
      { name: "Jessie Buckley",    film: "Hamnet",       winner: true, rank: 3 },
      { name: "Kate Hudson",       film: "Song Sung Blue",             rank: 4 },
      { name: "Renate Reinsve",    film: "Sentimental Value",          rank: 5 },
    ],
    "Best Actor": [
      { name: "Michael B. Jordan",  film: "Sinners",                  winner: true, rank: 1 },
      { name: "Timothée Chalamet",  film: "Marty Supreme",            rank: 2 },
      { name: "Ethan Hawke",        film: "Blue Moon",                rank: 3 },
      { name: "Leonardo DiCaprio",  film: "One Battle After Another", rank: 4 },
      { name: "Wagner Moura",       film: "The Secret Agent",         rank: 5 },
    ],
    "Best Supporting Actress": [
      { name: "Amy Madigan",            film: "Weapons",           winner: true, rank: 1 },
      { name: "Teyana Taylor",          film: "One Battle After Another", rank: 2 },
      { name: "Wunmi Mosaku",           film: "Sinners",           rank: 3 },
      { name: "Inga Ibsdotter Lilleaas", film: "Sentimental Value", rank: 4 },
      { name: "Elle Fanning",           film: "Sentimental Value", rank: 5 },
    ],
    "Best Supporting Actor": [
      { name: "Sean Penn",         film: "One Battle After Another", winner: true, rank: 1 },
      { name: "Benicio del Toro",  film: "One Battle After Another", rank: 2 },
      { name: "Stellan Skarsgård", film: "Sentimental Value",        rank: 3 },
      { name: "Delroy Lindo",      film: "Sinners",                  rank: 4 },
      { name: "Jacob Elordi",      film: "Frankenstein",             rank: 5 },
    ],
  },

  // ── 97th Academy Awards (March 2, 2025) ──────────────────────────────────
  2024: {
    ceremony: "97th Academy Awards",
    "Best Picture": [
      { film: "Anora",               winner: true,  rank: 1 },
      { film: "The Brutalist",                       rank: 2 },
      { film: "Conclave",                            rank: 3 },
      { film: "Emilia Pérez",                        rank: 4 },
      { film: "Nickel Boys",                         rank: 5 },
      { film: "A Complete Unknown",                  rank: 6 },
      { film: "I'm Still Here",                      rank: 7 },
      { film: "Dune: Part Two",      notSeen: true },
      { film: "The Substance",       notSeen: true },
      { film: "Wicked",              notSeen: true },
    ],
    "Best Actress": [
      { name: "Mikey Madison",       film: "Anora",              rank: 1 },
      { name: "Fernanda Torres",     film: "I'm Still Here",     rank: 2 },
      { name: "Karla Sofía Gascón", film: "Emilia Pérez",       rank: 3 },
      { name: "Demi Moore",          film: "The Substance",      winner: true, notSeen: true },
      { name: "Cynthia Erivo",       film: "Wicked",             notSeen: true },
    ],
    "Best Actor": [
      { name: "Adrien Brody",        film: "The Brutalist",      winner: true, rank: 1 },
      { name: "Ralph Fiennes",       film: "Conclave",           rank: 2 },
      { name: "Colman Domingo",      film: "Sing Sing",          rank: 3 },
      { name: "Timothée Chalamet",   film: "A Complete Unknown", rank: 4 },
      { name: "Sebastian Stan",      film: "The Apprentice",     rank: 5 },
    ],
    "Best Supporting Actress": [
      { name: "Isabella Rossellini", film: "Conclave",           rank: 1 },
      { name: "Felicity Jones",      film: "The Brutalist",      rank: 2 },
      { name: "Monica Barbaro",      film: "A Complete Unknown", rank: 3 },
      { name: "Zoe Saldana",         film: "Emilia Pérez",       winner: true, rank: 4 },
      { name: "Ariana Grande",       film: "Wicked",             notSeen: true },
    ],
    "Best Supporting Actor": [
      { name: "Kieran Culkin",       film: "A Real Pain",        winner: true, rank: 1 },
      { name: "Yura Borisov",        film: "Anora",              rank: 2 },
      { name: "Edward Norton",       film: "A Complete Unknown", rank: 3 },
      { name: "Jeremy Strong",       film: "The Apprentice",     rank: 4 },
      { name: "Zach Galifianakis",   film: "A Real Pain",        rank: 5 },
    ],
  },

  // ── 96th Academy Awards (March 10, 2024) ─────────────────────────────────
  2023: {
    ceremony: "96th Academy Awards",
    "Best Picture": [
      { film: "Oppenheimer",         winner: true,  rank: 1 },
      { film: "The Holdovers",                      rank: 2 },
      { film: "Anatomy of a Fall",                  rank: 3 },
      { film: "Past Lives",                         rank: 4 },
      { film: "Poor Things",                        rank: 5 },
      { film: "Killers of the Flower Moon",         rank: 6 },
      { film: "American Fiction",                   rank: 7 },
      { film: "Maestro",                            rank: 8 },
      { film: "Zone of Interest",                   rank: 9 },
      { film: "Barbie",                             rank: 10 },
    ],
    "Best Actress": [
      { name: "Lily Gladstone",      film: "Killers of the Flower Moon", rank: 1 },
      { name: "Sandra Hüller",       film: "Anatomy of a Fall",          rank: 2 },
      { name: "Emma Stone",          film: "Poor Things",     winner: true, rank: 3 },
      { name: "Annette Bening",      film: "Nyad",                        rank: 4 },
      { name: "Carey Mulligan",      film: "Maestro",                     rank: 5 },
    ],
    "Best Actor": [
      { name: "Cillian Murphy",      film: "Oppenheimer",     winner: true, rank: 1 },
      { name: "Paul Giamatti",       film: "The Holdovers",               rank: 2 },
      { name: "Colman Domingo",      film: "Rustin",                      rank: 3 },
      { name: "Bradley Cooper",      film: "Maestro",                     rank: 4 },
      { name: "Jeffrey Wright",      film: "American Fiction",            rank: 5 },
    ],
    "Best Supporting Actress": [
      { name: "Da'Vine Joy Randolph", film: "The Holdovers",  winner: true, rank: 1 },
      { name: "Emily Blunt",          film: "Oppenheimer",                 rank: 2 },
      { name: "America Ferrera",      film: "Barbie",                      rank: 3 },
      { name: "Danielle Brooks",      film: "The Color Purple",            rank: 4 },
      { name: "Jodie Foster",         film: "Nyad",                        rank: 5 },
    ],
    "Best Supporting Actor": [
      { name: "Robert Downey Jr.",   film: "Oppenheimer",     winner: true, rank: 1 },
      { name: "Ryan Gosling",        film: "Barbie",                      rank: 2 },
      { name: "Mark Ruffalo",        film: "Poor Things",                 rank: 3 },
      { name: "Sterling K. Brown",   film: "American Fiction",            rank: 4 },
      { name: "Robert De Niro",      film: "Killers of the Flower Moon",  rank: 5 },
    ],
  },

  // ── 95th Academy Awards (March 12, 2023) ─────────────────────────────────
  2022: {
    ceremony: "95th Academy Awards",
    "Best Picture": [
      { film: "Everything Everywhere All at Once", winner: true, rank: 1 },
      { film: "The Banshees of Inisherin",                      rank: 2 },
      { film: "Tár",                                            rank: 3 },
      { film: "The Fabelmans",                                  rank: 4 },
      { film: "All Quiet on the Western Front",                 rank: 5 },
      { film: "Women Talking",                                  rank: 6 },
      { film: "Elvis",                                          rank: 7 },
      { film: "Triangle of Sadness",                            rank: 8 },
      { film: "Avatar: The Way of Water",                       rank: 9 },
      { film: "Top Gun: Maverick",                              rank: 10 },
    ],
    "Best Actress": [
      { name: "Cate Blanchett",      film: "Tár",                         rank: 1 },
      { name: "Michelle Yeoh",       film: "Everything Everywhere All at Once", winner: true, rank: 2 },
      { name: "Michelle Williams",   film: "The Fabelmans",               rank: 3 },
      { name: "Andrea Riseborough",  film: "To Leslie",                   rank: 4 },
      { name: "Ana de Armas",        film: "Blonde",                      rank: 5 },
    ],
    "Best Actor": [
      { name: "Colin Farrell",       film: "The Banshees of Inisherin",   rank: 1 },
      { name: "Paul Mescal",         film: "Aftersun",                    rank: 2 },
      { name: "Austin Butler",       film: "Elvis",                       rank: 3 },
      { name: "Brendan Fraser",      film: "The Whale",       winner: true, rank: 4 },
      { name: "Bill Nighy",          film: "Living",                      rank: 5 },
    ],
    "Best Supporting Actress": [
      { name: "Kerry Condon",        film: "The Banshees of Inisherin",   rank: 1 },
      { name: "Stephanie Hsu",       film: "Everything Everywhere All at Once", rank: 2 },
      { name: "Hong Chau",           film: "The Whale",                   rank: 3 },
      { name: "Jamie Lee Curtis",    film: "Everything Everywhere All at Once", winner: true, rank: 4 },
      { name: "Angela Bassett",      film: "Black Panther: Wakanda Forever", rank: 5 },
    ],
    "Best Supporting Actor": [
      { name: "Barry Keoghan",       film: "The Banshees of Inisherin",   rank: 1 },
      { name: "Ke Huy Quan",         film: "Everything Everywhere All at Once", winner: true, rank: 2 },
      { name: "Brendan Gleeson",     film: "The Banshees of Inisherin",   rank: 3 },
      { name: "Brian Tyree Henry",   film: "Causeway",                    rank: 4 },
      { name: "Judd Hirsch",         film: "The Fabelmans",               rank: 5 },
    ],
  },

};
