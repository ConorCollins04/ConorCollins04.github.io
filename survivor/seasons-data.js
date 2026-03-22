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
    id: 8, name: "All-Stars", year: 2004,
    tribes: [
      { name: "Chapera", color: "#cc0100", players: [
      { name: "Amber Brkich",          gender: "f" },
      { name: "Tom Buchanan",          gender: "m" },
      { name: "Alicia Calaway",        gender: "f" },
      { name: "Rob Cesternino",        gender: "m" },
      { name: "Susan Hawk",            gender: "f" },
      { name: "Rob Mariano",           gender: "m" },
      ]},
      { name: "Mogo Mogo", color: "#006633", players: [
      { name: "Colby Donaldson",       gender: "m" },
      { name: "Richard Hatch",         gender: "m" },
      { name: "Shii-Ann Huang",        gender: "f" },
      { name: "Jenna Morasca",         gender: "f" },
      { name: "Lex van den Berghe",    gender: "m" },
      { name: "Kathy Vavrick-O'Brien", gender: "f" },
      ]},
      { name: "Saboga", color: "#ffcc33", players: [
      { name: "Rudy Boesch",           gender: "m" },
      { name: "Rupert Boneham",        gender: "m" },
      { name: "Jenna Lewis",           gender: "f" },
      { name: "Jerri Manthey",         gender: "f" },
      { name: "Tina Wesson",           gender: "f" },
      { name: "Ethan Zohn",            gender: "m" },
      ]}
    ]
  },
  {
    id: 9, name: "Vanuatu", year: 2004,
    tribes: [
      { name: "Lopevi", color: "#cc0100", players: [
      { name: "Chad Crittenden",       gender: "m" },
      { name: "Chris Daugherty",       gender: "m" },
      { name: "Brady Finta",           gender: "m" },
      { name: "Rory Freeman",          gender: "m" },
      { name: "Brook Geraghty",        gender: "m" },
      { name: "John Kenney",           gender: "m" },
      { name: "Lea Masters",           gender: "m" },
      { name: "John Palyok",           gender: "m" },
      { name: "Travis Sampson",        gender: "m" },
      ]},
      { name: "Yasur", color: "#ffff33", players: [
      { name: "Julie Berry",           gender: "f" },
      { name: "Scout Cloud Lee",       gender: "f" },
      { name: "Ami Cusack",            gender: "f" },
      { name: "Mia Galeotalanza",      gender: "f" },
      { name: "Lisa Keiffer",          gender: "f" },
      { name: "Dolly Neely",           gender: "f" },
      { name: "Eliza Orlins",          gender: "f" },
      { name: "Leann Slaby",           gender: "f" },
      { name: "Twila Tanner",          gender: "f" },
      ]}
    ]
  },
  {
    id: 38, name: "Edge of Extinction", year: 2019,
    tribes: [
      { name: "Kama", color: "#ffcc33", players: [
      { name: "Joe Anglim",          gender: "m" },
      { name: "Victoria Baamonde",   gender: "f" },
      { name: "Aubry Bracco",        gender: "f" },
      { name: "Ron Clark",           gender: "m" },
      { name: "Eric Hafemann",       gender: "m" },
      { name: "Aurora McCreary",     gender: "f" },
      { name: "Julie Rosenberg",     gender: "f" },
      { name: "Gavin Whitson",       gender: "m" },
      { name: "Julia Carter",        gender: "f" },
      ]},
      { name: "Manu", color: "#013399", players: [
      { name: "Reem Daly",           gender: "f" },
      { name: "Wardog DaSilva",      gender: "m" },
      { name: "Rick Devens",         gender: "m" },
      { name: "Wendy Diaz",          gender: "f" },
      { name: "Lauren O'Connell",    gender: "f" },
      { name: "Keith Sowell",        gender: "m" },
      { name: "Chris Underwood",     gender: "m" },
      { name: "Kelley Wentworth",    gender: "f" },
      { name: "David Wright",        gender: "m" },
      ]}
    ]
  },
  {
    id: 39, name: "Island of the Idols", year: 2019,
    tribes: [
      { name: "Lairo", color: "#ff9966", players: [
      { name: "Elizabeth Beisel",   gender: "f" },
      { name: "Missy Byrd",         gender: "f" },
      { name: "Dean Kowalski",      gender: "m" },
      { name: "Tom Laidlaw",        gender: "m" },
      { name: "Aaron Meredith",     gender: "m" },
      { name: "Vince Moua",         gender: "m" },
      { name: "Karishma Patel",     gender: "f" },
      { name: "Ronnie Bardah",      gender: "m" },
      { name: "Elaine Stott",       gender: "f" },
      { name: "Chelsea Walker",     gender: "f" },
      ]},
      { name: "Vokai", color: "#996699", players: [
      { name: "Lauren Beck",        gender: "f" },
      { name: "Molly Byman",        gender: "f" },
      { name: "Janet Carbin",       gender: "f" },
      { name: "Kellee Kim",         gender: "f" },
      { name: "Jason Linden",       gender: "m" },
      { name: "Jack Nichting",      gender: "m" },
      { name: "Noura Salman",       gender: "f" },
      { name: "Tommy Sheehan",      gender: "m" },
      { name: "Jamal Shipman",      gender: "m" },
      { name: "Dan Spilo",          gender: "m" },
      ]}
    ]
  },
  {
    id: 40, name: "Winners at War", year: 2020,
    tribes: [
      { name: "Dakal", color: "#cc3232", players: [
      { name: "Tyson Apostol",        gender: "m" },
      { name: "Sophie Clarke",        gender: "f" },
      { name: "Sandra Diaz-Twine",    gender: "f" },
      { name: "Wendell Holland",      gender: "m" },
      { name: "Kim Spradlin-Wolfe",   gender: "f" },
      { name: "Yul Kwon",             gender: "m" },
      { name: "Sarah Lacina",         gender: "f" },
      { name: "Amber Mariano",        gender: "f" },
      { name: "Nick Wilson",          gender: "m" },
      { name: "Tony Vlachos",         gender: "m" },
      ]},
      { name: "Sele", color: "#013399", players: [
      { name: "Natalie Anderson",     gender: "f" },
      { name: "Danni Boatwright",     gender: "f" },
      { name: "Ben Driebergen",       gender: "m" },
      { name: "Michele Fitzgerald",   gender: "f" },
      { name: "Jeremy Collins",       gender: "m" },
      { name: "Adam Klein",           gender: "m" },
      { name: "Rob Mariano",          gender: "m" },
      { name: "Parvati Shallow",      gender: "f" },
      { name: "Denise Stapley",       gender: "f" },
      { name: "Ethan Zohn",           gender: "m" },
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
    id: 43, name: "Survivor 43", year: 2022,
    tribes: [
      { name: "Baka", color: "#f7e32d", players: [
      { name: "Mike Gabler",        gender: "m" },
      { name: "Owen Knight",        gender: "m" },
      { name: "Sami Layadi",        gender: "m" },
      { name: "Elie Scott",         gender: "f" },
      { name: "Morriah Young",      gender: "f" },
      { name: "Jeanine Zheng",      gender: "f" },
      ]},
      { name: "Coco", color: "#15bcf0", players: [
      { name: "Geo Bustamante",     gender: "m" },
      { name: "Lindsay Carmine",    gender: "f" },
      { name: "Cassidy Clark",      gender: "f" },
      { name: "Karla Cruz Godoy",   gender: "f" },
      { name: "James Jones",        gender: "m" },
      { name: "Ryan Medrano",       gender: "m" },
      ]},
      { name: "Vesi", color: "#fc5f65", players: [
      { name: "Cody Assenmacher",   gender: "m" },
      { name: "Justine Brennan",    gender: "f" },
      { name: "Nneka Ejere",        gender: "f" },
      { name: "Noelle Lambert",     gender: "f" },
      { name: "Jesse Lopez",        gender: "m" },
      { name: "Dwight Moore",       gender: "m" },
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
    id: 45, name: "Survivor 45", year: 2023,
    tribes: [
      { name: "Belo", color: "#01a0e7", players: [
      { name: "Kendra McQuarrie",  gender: "f" },
      { name: "Brando Meyer",      gender: "m" },
      { name: "Kellie Nalbandian", gender: "f" },
      { name: "Jake O'Kane",       gender: "m" },
      { name: "Bruce Perreault",   gender: "m" },
      { name: "Katurah Topps",     gender: "f" },
      ]},
      { name: "Lulu", color: "#ffe12f", players: [
      { name: "Sabiyah Broderick", gender: "f" },
      { name: "Brandon Donlon",    gender: "m" },
      { name: "Sean Edwards",      gender: "m" },
      { name: "Emily Flippen",     gender: "f" },
      { name: "Kaleb Gebrewold",   gender: "m" },
      { name: "Hannah Rose",       gender: "f" },
      ]},
      { name: "Reba", color: "#fe5e59", players: [
      { name: "Julie Allie",       gender: "f" },
      { name: "Sifu Alsup",        gender: "m" },
      { name: "Drew Basile",       gender: "m" },
      { name: "Austin Li Coon",    gender: "m" },
      { name: "J. Maya",           gender: "f" },
      { name: "Dee Valladares",    gender: "f" },
      ]}
    ]
  },
  {
    id: 46, name: "Survivor 46", year: 2024,
    tribes: [
      { name: "Nami", color: "#fea729", players: [
      { name: "Tevin Davis",            gender: "m" },
      { name: "Hunter McKnight",        gender: "m" },
      { name: "Randen Montalvo",        gender: "m" },
      { name: "Soda Thompson",          gender: "f" },
      { name: "Venus Vafa",             gender: "f" },
      { name: "Liz Wilcox",             gender: "f" },
      ]},
      { name: "Siga", color: "#6cd859", players: [
      { name: "Charlie Davis",          gender: "m" },
      { name: "Moriah Gaynor",          gender: "f" },
      { name: "Jem Hussain-Adams",      gender: "f" },
      { name: "Ben Katzman",            gender: "m" },
      { name: "Maria Shrime Gonzalez",  gender: "f" },
      { name: "Tim Spicer",             gender: "m" },
      ]},
      { name: "Yanu", color: "#cf72d3", players: [
      { name: "Q Burdette",             gender: "m" },
      { name: "Jess Chong",             gender: "f" },
      { name: "Tiffany Nicole Ervin",   gender: "f" },
      { name: "Bhanu Gopal",            gender: "m" },
      { name: "David Jelinsky",         gender: "m" },
      { name: "Kenzie Petty",           gender: "f" },
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
  {
    id: 49, name: "Survivor 49", year: 2025,
    tribes: [
      { name: "Hina", color: "#feda47", players: [
      { name: "MC Chukwujekwu",        gender: "f" },
      { name: "Kristina Mills",         gender: "f" },
      { name: "Steven Ramm",            gender: "m" },
      { name: "Sophie Segreti",         gender: "f" },
      { name: "Jason Treul",            gender: "m" },
      { name: "Matt Williams",          gender: "m" },
      ]},
      { name: "Kele", color: "#32aad6", players: [
      { name: "Sophi Balerdi",          gender: "f" },
      { name: "Annie Davis",            gender: "f" },
      { name: "Jeremiah Ing",           gender: "m" },
      { name: "Jake Latimer",           gender: "m" },
      { name: "Nicole Mazullo",         gender: "f" },
      { name: "Alex Moore",             gender: "m" },
      ]},
      { name: "Uli", color: "#f16b52", players: [
      { name: "Sage Ahrens-Nichols",    gender: "f" },
      { name: "Shannon Fairweather",    gender: "f" },
      { name: "Savannah Louie",         gender: "f" },
      { name: "Nate Moore",             gender: "m" },
      { name: "Jawan Pitts",            gender: "m" },
      { name: "Rizo Velovic",           gender: "m" },
      ]}
    ]
  },
  {
    id: 50, name: "In the Hands of the Fans", year: 2026,
    tribes: [
      { name: "Civa", color: "#f28c27", players: [
      { name: "Rick Devens",                  gender: "m" },
      { name: "Cirie Fields",                 gender: "f" },
      { name: "Emily Flippen",                gender: "f" },
      { name: "Christian Hubicki",            gender: "m" },
      { name: "Joe Hunter",                   gender: "m" },
      { name: "Jenna Lewis-Dougherty",        gender: "f" },
      { name: "Savannah Louie",               gender: "f" },
      { name: "Ozzy Lusth",                   gender: "m" },
      ]},
      { name: "Kalo", color: "#7febf2", players: [
      { name: "Charlie Davis",                gender: "m" },
      { name: "Tiffany Nicole Ervin",         gender: "f" },
      { name: "Chrissy Hofbeck",              gender: "f" },
      { name: "Kamilla Karthigesu",           gender: "f" },
      { name: "Dee Valladares",               gender: "f" },
      { name: "Coach Wade",                   gender: "m" },
      { name: "Mike White",                   gender: "m" },
      { name: "Jonathan Young",               gender: "m" },
      ]},
      { name: "Vatu", color: "#ff66cc", players: [
      { name: "Aubry Bracco",                 gender: "f" },
      { name: "Q Burdette",                   gender: "m" },
      { name: "Colby Donaldson",              gender: "m" },
      { name: "Kyle Fraser",                  gender: "m" },
      { name: "Angelina Keeley",              gender: "f" },
      { name: "Stephenie LaGrossa Kendrick",  gender: "f" },
      { name: "Genevieve Mushaluk",           gender: "f" },
      { name: "Rizo Velovic",                 gender: "m" },
      ]}
    ]
  },
];

const PLAYER_INFO = {};
SEASONS.forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
  PLAYER_INFO[p.name] = { season: s, tribe: t, gender: p.gender };
})));
