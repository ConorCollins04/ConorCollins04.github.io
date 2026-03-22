const SEASONS = [
  {
    id: 1, name: "Borneo", year: 2000,
    tribes: [
      { name: "Tagi", color: "#ff6600", players: [
      { name: "Dirk Been",          gender: "m" },
      { name: "Rudy Boesch",        gender: "m" },
      { name: "Sonja Christopher",  gender: "f" },
      { name: "Richard Hatch",      gender: "m" },
      { name: "Susan Hawk",         gender: "f" },
      { name: "Sean Kenniff",       gender: "m" },
      { name: "Stacey Stillman",    gender: "f" },
      { name: "Kelly Wiglesworth",  gender: "f" },
      ]},
      { name: "Pagong", color: "#ffff00", players: [
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
      { name: "Ogakor", color: "#cbff00", players: [
      { name: "Amber Brkich",       gender: "f" },
      { name: "Colby Donaldson",    gender: "m" },
      { name: "Keith Famie",        gender: "m" },
      { name: "Kel Gleason",        gender: "m" },
      { name: "Maralyn Hershey",    gender: "f" },
      { name: "Jerri Manthey",      gender: "f" },
      { name: "Mitchell Olson",     gender: "m" },
      { name: "Tina Wesson",        gender: "f" },
      ]},
      { name: "Kucha", color: "#0099cb", players: [
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
      { name: "Boran", color: "#ffcc02", players: [
      { name: "Lex van den Berghe", gender: "m" },
      { name: "Clarence Black",     gender: "m" },
      { name: "Tom Buchanan",       gender: "m" },
      { name: "Jessie Camacho",     gender: "f" },
      { name: "Kelly Goldsmith",    gender: "f" },
      { name: "Kim Johnson",        gender: "f" },
      { name: "Diane Ogden",        gender: "f" },
      { name: "Ethan Zohn",         gender: "m" },
      ]},
      { name: "Samburu", color: "#cc0133", players: [
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
      { name: "Maraamu", color: "#cbff00", players: [
      { name: "Gina Crews",            gender: "f" },
      { name: "Hunter Ellis",          gender: "m" },
      { name: "Peter Harkey",          gender: "m" },
      { name: "Patricia Jackson",      gender: "f" },
      { name: "Sarah Jones",           gender: "f" },
      { name: "Rob Mariano",           gender: "m" },
      { name: "Sean Rector",           gender: "m" },
      { name: "Vecepia Towery",        gender: "f" },
      ]},
      { name: "Rotu", color: "#65cccc", players: [
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
      { name: "Chuay Gahn", color: "#ff6600", players: [
      { name: "Jan Gentry",         gender: "f" },
      { name: "Helen Glover",       gender: "f" },
      { name: "Brian Heidik",       gender: "m" },
      { name: "Ghandia Johnson",    gender: "f" },
      { name: "Clay Jordan",        gender: "m" },
      { name: "John Raymond",       gender: "m" },
      { name: "Ted Rogers Jr.",     gender: "m" },
      { name: "Tanya Vance",        gender: "f" },
      ]},
      { name: "Sook Jai", color: "#990099", players: [
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
      { name: "Jaburu", color: "#ffff00", players: [
      { name: "Deena Bennett",      gender: "f" },
      { name: "Jeanne Hebert",      gender: "f" },
      { name: "Janet Koth",         gender: "f" },
      { name: "Shawna Mitchell",    gender: "f" },
      { name: "Jenna Morasca",      gender: "f" },
      { name: "Christy Smith",      gender: "f" },
      { name: "Heidi Strobel",      gender: "f" },
      { name: "JoAnna Ward",        gender: "f" },
      ]},
      { name: "Tambaqui", color: "#0099ff", players: [
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
      { name: "Drake", color: "#0099ff", players: [
      { name: "Rupert Boneham",     gender: "m" },
      { name: "Shawn Cohen",        gender: "m" },
      { name: "Nicole Delma",       gender: "f" },
      { name: "Sandra Diaz-Twine",  gender: "f" },
      { name: "Jon Dalton",       gender: "m" },
      { name: "Christa Hastie",     gender: "f" },
      { name: "Burton Roberts",     gender: "m" },
      { name: "Michelle Tesauro",   gender: "f" },
      ]},
      { name: "Morgan", color: "#ff9933", players: [
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
  {
    id: 41, name: "Survivor 41", year: 2021,
    tribes: [
      { name: "Luvu", color: "#65ccff", players: [
      { name: "Heather Aldret",    gender: "f" },
      { name: "Erika Casupanan",   gender: "f" },
      { name: "Danny McCray",      gender: "m" },
      { name: "Naseer Muttalif",   gender: "m" },
      { name: "DeShawn Radden",    gender: "m" },
      { name: "Sydney Segal",      gender: "f" },
      ]},
      { name: "Ua", color: "#99cc66", players: [
      { name: "Ricard Foyé",       gender: "m" },
      { name: "Genie Chen",        gender: "f" },
      { name: "Brad Reese",        gender: "m" },
      { name: "JD Robinson",       gender: "m" },
      { name: "Shan Smith",        gender: "f" },
      { name: "Sara Wilson",       gender: "f" },
      ]},
      { name: "Yase", color: "#ffff67", players: [
      { name: "Eric Abraham",      gender: "m" },
      { name: "Xander Hastings",   gender: "m" },
      { name: "Evvie Jagoda",      gender: "f" },
      { name: "Tiffany Seely",     gender: "f" },
      { name: "David Voce",        gender: "m" },
      { name: "Liana Wallace",     gender: "f" },
      ]}
    ]
  },
  {
    id: 42, name: "Survivor 42", year: 2022,
    tribes: [
      { name: "Ika", color: "#0099cb", players: [
      { name: "Rocksroy Bailey",      gender: "m" },
      { name: "Romeo Escobar",        gender: "m" },
      { name: "Swati Goel",           gender: "f" },
      { name: "Tori Meehan",          gender: "f" },
      { name: "Drea Wheeler",         gender: "f" },
      { name: "Zach Wurtenberger",    gender: "m" },
      ]},
      { name: "Taku", color: "#ff9900", players: [
      { name: "Lindsay Dolashewich",  gender: "f" },
      { name: "Jackson Fox",          gender: "m" },
      { name: "Maryanne Oketch",      gender: "f" },
      { name: "Marya Sherron",        gender: "f" },
      { name: "Jonathan Young",       gender: "m" },
      { name: "Omar Zaheer",          gender: "m" },
      ]},
      { name: "Vati", color: "#34cc66", players: [
      { name: "Hai Giang",            gender: "m" },
      { name: "Chanelle Howell",      gender: "f" },
      { name: "Jenny Kim",            gender: "f" },
      { name: "Lydia Meredith",       gender: "f" },
      { name: "Daniel Strunk",        gender: "m" },
      { name: "Mike Turner",          gender: "m" },
      ]}
    ]
  },
  {
    id: 44, name: "Survivor 44", year: 2023,
    tribes: [
      { name: "Ratu", color: "#ff9c43", players: [
      { name: "Brandon Cottom",           gender: "m" },
      { name: "Kane Fritzler",            gender: "m" },
      { name: "Lauren Harpe",             gender: "f" },
      { name: "Matthew Grinstead-Mayle",  gender: "m" },
      { name: "Maddy Pomilla",            gender: "f" },
      { name: "Jaime Lynn Ruiz",          gender: "f" },
      ]},
      { name: "Soka", color: "#80e962", players: [
      { name: "Heidi Lagares-Greenblatt", gender: "f" },
      { name: "Frannie Marin",            gender: "f" },
      { name: "Danny Massa",              gender: "m" },
      { name: "Matt Blankinship",         gender: "m" },
      { name: "Claire Rafson",            gender: "f" },
      { name: "Josh Wilder",              gender: "m" },
      ]},
      { name: "Tika", color: "#d6a9f4", players: [
      { name: "Yam Yam Arocho",          gender: "m" },
      { name: "Carson Garrett",          gender: "m" },
      { name: "Helen Li",                gender: "f" },
      { name: "Bruce Perreault",         gender: "m" },
      { name: "Sarah Wade",              gender: "f" },
      { name: "Carolyn Wiger",           gender: "f" },
      ]}
    ]
  },
  {
    id: 47, name: "Survivor 47", year: 2024,
    tribes: [
      { name: "Gata", color: "#fcde2d", players: [
      { name: "Anika Dhar",         gender: "f" },
      { name: "Rachel Lamont",      gender: "f" },
      { name: "Jon Lovett",         gender: "m" },
      { name: "Sam Phalen",         gender: "m" },
      { name: "Andy Rueda",         gender: "m" },
      { name: "Sierra Wright",      gender: "f" },
      ]},
      { name: "Lavo", color: "#fc5f65", players: [
      { name: "Teeny Chirichillo",  gender: "m" },
      { name: "Rome Cooney",        gender: "m" },
      { name: "Genevieve Mushaluk", gender: "f" },
      { name: "Kishan Patel",       gender: "m" },
      { name: "Aysha Welch",        gender: "f" },
      { name: "Sol Yi",             gender: "m" },
      ]},
      { name: "Tuku", color: "#049fdd", players: [
      { name: "TK Foster",          gender: "m" },
      { name: "Tiyana Hallums",     gender: "f" },
      { name: "Gabe Ortis",         gender: "m" },
      { name: "Kyle Ostwald",       gender: "m" },
      { name: "Sue Smey",           gender: "f" },
      { name: "Caroline Vidmar",    gender: "f" },
      ]}
    ]
  },
  {
    id: 48, name: "Survivor 48", year: 2025,
    tribes: [
      { name: "Civa", color: "#feb93c", players: [
      { name: "Kyle Fraser",        gender: "m" },
      { name: "Mitch Guerra",       gender: "m" },
      { name: "Kamilla Karthigesu", gender: "f" },
      { name: "David Kinne",        gender: "m" },
      { name: "Charity Nelms",      gender: "f" },
      { name: "Chrissy Sarnowsky",  gender: "f" },
      ]},
      { name: "Lagi", color: "#e365c7", players: [
      { name: "Shauhin Davari",     gender: "m" },
      { name: "Eva Erickson",       gender: "f" },
      { name: "Joe Hunter",         gender: "m" },
      { name: "Thomas Krottinger",  gender: "m" },
      { name: "Bianca Roses",       gender: "f" },
      { name: "Star Toomey",        gender: "f" },
      ]},
      { name: "Vula", color: "#a8f496", players: [
      { name: "Stephanie Berger",   gender: "f" },
      { name: "Saiounia Hughley",   gender: "f" },
      { name: "Kevin Leung",        gender: "m" },
      { name: "Cedrek McFadden",    gender: "m" },
      { name: "Justin Pioppi",      gender: "m" },
      { name: "Mary Zheng",         gender: "f" },
      ]}
    ]
  },
];

const PLAYER_INFO = {};
SEASONS.forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
  PLAYER_INFO[p.name] = { season: s, tribe: t, gender: p.gender };
})));
