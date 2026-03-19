const SEASONS = [
  {
    id: 1, name: "Borneo", year: 2000,
    tribes: [
      { name: "Tagi", color: "#FF7F00", textColor: "#7a3010", players: [
      { name: "Dirk Been",          gender: "m" },
      { name: "Rudy Boesch",        gender: "m" },
      { name: "Sonja Christopher",  gender: "f" },
      { name: "Richard Hatch",      gender: "m" },
      { name: "Susan Hawk",         gender: "f" },
      { name: "Sean Kenniff",       gender: "m" },
      { name: "Stacey Stillman",    gender: "f" },
      { name: "Kelly Wiglesworth",  gender: "f" },
      ]},
      { name: "Pagong", color: "#FEE105", textColor: "#6a5808", players: [
      { name: "B.B. Andersen",      gender: "m" },
      { name: "Greg Buis",          gender: "m" },
      { name: "Gretchen Cordy",     gender: "f" },
      { name: "Ramona Gray",        gender: "f" },
      { name: "Colleen Haskell",    gender: "f" },
      { name: "Joel Klug",          gender: "m" },
      { name: "Jenna Lewis",        gender: "f" },
      { name: "Gervase Peterson",   gender: "m" },
      ]}
    ]
  },
  {
    id: 2, name: "The Australian Outback", year: 2001,
    tribes: [
      { name: "Ogakor", color: "#BFFF00", textColor: "#1a4a28", players: [
      { name: "Amber Brkich",       gender: "f" },
      { name: "Colby Donaldson",    gender: "m" },
      { name: "Keith Famie",        gender: "m" },
      { name: "Kel Gleason",        gender: "m" },
      { name: "Maralyn Hershey",    gender: "f" },
      { name: "Jerri Manthey",      gender: "f" },
      { name: "Mitchell Olson",     gender: "m" },
      { name: "Tina Wesson",        gender: "f" },
      ]},
      { name: "Kucha", color: "#48D1CC", textColor: "#1a3870", players: [
      { name: "Rodger Bingham",     gender: "m" },
      { name: "Nick Brown",         gender: "m" },
      { name: "Alicia Calaway",     gender: "f" },
      { name: "Debb Eaton",         gender: "f" },
      { name: "Elisabeth Filarski", gender: "f" },
      { name: "Kimmi Kappenberg",   gender: "f" },
      { name: "Michael Skupin",        gender: "m" },
      { name: "Jeff Varner",        gender: "m" },
      ]}
    ]
  },
  {
    id: 3, name: "Africa", year: 2001,
    tribes: [
      { name: "Boran", color: "#FFD700", textColor: "#6a4800", players: [
      { name: "Lex van den Berghe", gender: "m" },
      { name: "Clarence Black",     gender: "m" },
      { name: "Tom Buchanan",       gender: "m" },
      { name: "Jessie Camacho",     gender: "f" },
      { name: "Kelly Goldsmith",    gender: "f" },
      { name: "Kim Johnson",        gender: "f" },
      { name: "Diane Ogden",        gender: "f" },
      { name: "Ethan Zohn",         gender: "m" },
      ]},
      { name: "Samburu", color: "#FF0000", textColor: "#701010", players: [
      { name: "Carl Bilancione",    gender: "m" },
      { name: "Teresa Cooper",      gender: "f" },
      { name: "Silas Gaither",      gender: "m" },
      { name: "Frank Garrison",     gender: "m" },
      { name: "Kim Powers",         gender: "f" },
      { name: "Brandon Quinton",    gender: "m" },
      { name: "Lindsey Richter",    gender: "f" },
      { name: "Linda Spencer",      gender: "f" },
      ]}
    ]
  },
  {
    id: 4, name: "Marquesas", year: 2002,
    tribes: [
      { name: "Maraamu", color: "#E6FF0A", textColor: "#6a5808", players: [
      { name: "Gina Crews",            gender: "f" },
      { name: "Hunter Ellis",          gender: "m" },
      { name: "Peter Harkey",          gender: "m" },
      { name: "Patricia Jackson",      gender: "f" },
      { name: "Sarah Jones",           gender: "f" },
      { name: "Rob Mariano",           gender: "m" },
      { name: "Sean Rector",           gender: "m" },
      { name: "Vecepia Towery",        gender: "f" },
      ]},
      { name: "Rotu", color: "#64DCFF", textColor: "#203080", players: [
      { name: "Gabriel Cade",          gender: "m" },
      { name: "John Carroll",          gender: "m" },
      { name: "Robert DeCanio",        gender: "m" },
      { name: "Neleh Dennis",          gender: "f" },
      { name: "Paschal English",       gender: "m" },
      { name: "Tammy Leitner",         gender: "f" },
      { name: "Kathy Vavrick-O'Brien", gender: "f" },
      { name: "Zoe Zanidakis",         gender: "f" },
      ]}
    ]
  },
  {
    id: 5, name: "Thailand", year: 2002,
    tribes: [
      { name: "Chuay Gahn", color: "#FF4F00", textColor: "#703000", players: [
      { name: "Jan Gentry",         gender: "f" },
      { name: "Helen Glover",       gender: "f" },
      { name: "Brian Heidik",       gender: "m" },
      { name: "Ghandia Johnson",    gender: "f" },
      { name: "Clay Jordan",        gender: "m" },
      { name: "John Raymond",       gender: "m" },
      { name: "Ted Rogers Jr.",     gender: "m" },
      { name: "Tanya Vance",        gender: "f" },
      ]},
      { name: "Sook Jai", color: "#660099", textColor: "#380878", players: [
      { name: "Shii-Ann Huang",     gender: "f" },
      { name: "Jake Billingsley",   gender: "m" },
      { name: "Erin Collins",       gender: "f" },
      { name: "Stephanie Dill",     gender: "f" },
      { name: "Jed Hildebrand",     gender: "m" },
      { name: "Penny Ramsey",       gender: "f" },
      { name: "Ken Stafford",       gender: "m" },
      { name: "Robb Zbacnik",       gender: "m" },
      ]}
    ]
  },
  {
    id: 6, name: "The Amazon", year: 2003,
    tribes: [
      { name: "Jaburu", color: "#FFFF31", textColor: "#702000", players: [
      { name: "Deena Bennett",      gender: "f" },
      { name: "Jeanne Hebert",      gender: "f" },
      { name: "Janet Koth",         gender: "f" },
      { name: "Shawna Mitchell",    gender: "f" },
      { name: "Jenna Morasca",      gender: "f" },
      { name: "Christy Smith",      gender: "f" },
      { name: "Heidi Strobel",      gender: "f" },
      { name: "JoAnna Ward",        gender: "f" },
      ]},
      { name: "Tambaqui", color: "#3366FF", textColor: "#103878", players: [
      { name: "Ryan Aiken",           gender: "m" },
      { name: "Alex Bell",            gender: "m" },
      { name: "Rob Cesternino",       gender: "m" },
      { name: "Matthew von Ertfelda", gender: "m" },
      { name: "Dave Johnson",         gender: "m" },
      { name: "Butch Lockley",        gender: "m" },
      { name: "Daniel Lue",           gender: "m" },
      { name: "Roger Sexton",         gender: "m" },
      ]}
    ]
  },
  {
    id: 7, name: "Pearl Islands", year: 2003,
    tribes: [
      { name: "Drake", color: "#87CEEB", textColor: "#0a4858", players: [
      { name: "Rupert Boneham",     gender: "m" },
      { name: "Shawn Cohen",        gender: "m" },
      { name: "Nicole Delma",       gender: "f" },
      { name: "Sandra Diaz-Twine",  gender: "f" },
      { name: "Jon Dalton",       gender: "m" },
      { name: "Christa Hastie",     gender: "f" },
      { name: "Burton Roberts",     gender: "m" },
      { name: "Michelle Tesauro",   gender: "f" },
      ]},
      { name: "Morgan", color: "#FFA500", textColor: "#601008", players: [
      { name: "Tijuana Bradley",    gender: "f" },
      { name: "Trish Dunn",         gender: "f" },
      { name: "Darrah Johnson",     gender: "f" },
      { name: "Lillian Morris",     gender: "f" },
      { name: "Ryan Opray",         gender: "m" },
      { name: "Andrew Savage",      gender: "m" },
      { name: "Ryan Shoulders",     gender: "m" },
      { name: "Osten Taylor",       gender: "m" },
      ]}
    ]
  },
];

const PLAYER_INFO = {};
SEASONS.forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
  PLAYER_INFO[p.name] = { season: s, tribe: t, gender: p.gender };
})));
