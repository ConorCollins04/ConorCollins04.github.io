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
      { name: "Ethan Zohn",         gender: "m", placement:  1, merge: true,  juror: false },
      { name: "Kim Johnson",        gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Lex van den Berghe", gender: "m", placement:  3, merge: true,  juror: true  },
      { name: "Tom Buchanan",       gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Kelly Goldsmith",    gender: "f", placement:  9, merge: true,  juror: true  },
      { name: "Clarence Black",     gender: "m", placement: 10, merge: true,  juror: false },
      { name: "Jessie Camacho",     gender: "f", placement: 15, merge: false, juror: false },
      { name: "Diane Ogden",        gender: "f", placement: 16, merge: false, juror: false },
      ]},
      { name: "Samburu", color: "#cc0133", players: [
      { name: "Teresa Cooper",      gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Kim Powers",         gender: "f", placement:  6, merge: true,  juror: true  },
      { name: "Frank Garrison",     gender: "m", placement:  7, merge: true,  juror: true  },
      { name: "Brandon Quinton",    gender: "m", placement:  8, merge: true,  juror: true  },
      { name: "Lindsey Richter",    gender: "f", placement: 11, merge: false, juror: false },
      { name: "Silas Gaither",      gender: "m", placement: 12, merge: false, juror: false },
      { name: "Linda Spencer",      gender: "f", placement: 13, merge: false, juror: false },
      { name: "Carl Bilancione",    gender: "m", placement: 14, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 4, name: "Marquesas", year: 2002,
    tribes: [
      { name: "Maraamu", color: "#cbff00", players: [
      { name: "Vecepia Towery",        gender: "f", placement:  1, merge: true,  juror: false },
      { name: "Sean Rector",           gender: "m", placement:  5, merge: true,  juror: true  },
      { name: "Rob Mariano",           gender: "m", placement: 10, merge: true,  juror: false },
      { name: "Gina Crews",            gender: "f", placement: 11, merge: false, juror: false },
      { name: "Sarah Jones",           gender: "f", placement: 13, merge: false, juror: false },
      { name: "Hunter Ellis",          gender: "m", placement: 14, merge: false, juror: false },
      { name: "Patricia Jackson",      gender: "f", placement: 15, merge: false, juror: false },
      { name: "Peter Harkey",          gender: "m", placement: 16, merge: false, juror: false },
      ]},
      { name: "Rotu", color: "#65cccc", players: [
      { name: "Neleh Dennis",          gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Kathy Vavrick-O'Brien", gender: "f", placement:  3, merge: true,  juror: true  },
      { name: "Paschal English",       gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Robert DeCanio",        gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Tammy Leitner",         gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Zoe Zanidakis",         gender: "f", placement:  8, merge: true,  juror: true  },
      { name: "John Carroll",          gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Gabriel Cade",          gender: "m", placement: 12, merge: false, juror: false },
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
      { name: "Jenna Morasca",      gender: "f", placement:  1, merge: true,  juror: false },
      { name: "Heidi Strobel",      gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Christy Smith",      gender: "f", placement:  6, merge: true,  juror: true  },
      { name: "Deena Bennett",      gender: "f", placement:  8, merge: true,  juror: true  },
      { name: "Shawna Mitchell",    gender: "f", placement: 11, merge: false, juror: false },
      { name: "Jeanne Hebert",      gender: "f", placement: 12, merge: false, juror: false },
      { name: "JoAnna Ward",        gender: "f", placement: 13, merge: false, juror: false },
      { name: "Janet Koth",         gender: "f", placement: 15, merge: false, juror: false },
      ]},
      { name: "Tambaqui", color: "#0099ff", players: [
      { name: "Matthew von Ertfelda", gender: "m", placement:  2, merge: true,  juror: false },
      { name: "Rob Cesternino",       gender: "m", placement:  3, merge: true,  juror: true  },
      { name: "Butch Lockley",        gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Alex Bell",            gender: "m", placement:  7, merge: true,  juror: true  },
      { name: "Dave Johnson",         gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Roger Sexton",         gender: "m", placement: 10, merge: true,  juror: false },
      { name: "Daniel Lue",           gender: "m", placement: 14, merge: false, juror: false },
      { name: "Ryan Aiken",           gender: "m", placement: 16, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 7, name: "Pearl Islands", year: 2003,
    tribes: [
      { name: "Drake", color: "#0099ff", players: [
      { name: "Sandra Diaz-Twine",  gender: "f", placement:  1, merge: true,  juror: false },
      { name: "Jon Dalton",         gender: "m", placement:  3, merge: true,  juror: true  },
      { name: "Burton Roberts",     gender: "m", placement:  5, merge: true,  juror: true  },
      { name: "Christa Hastie",     gender: "f", placement:  6, merge: true,  juror: true  },
      { name: "Rupert Boneham",     gender: "m", placement:  8, merge: true,  juror: true  },
      { name: "Shawn Cohen",        gender: "m", placement: 12, merge: false, juror: false },
      { name: "Michelle Tesauro",   gender: "f", placement: 14, merge: false, juror: false },
      { name: "Nicole Delma",       gender: "f", placement: 16, merge: false, juror: false },
      ]},
      { name: "Morgan", color: "#ff9933", players: [
      { name: "Lillian Morris",     gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Darrah Johnson",     gender: "f", placement:  4, merge: true,  juror: true  },
      { name: "Tijuana Bradley",    gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Ryan Opray",         gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Andrew Savage",      gender: "m", placement: 10, merge: true,  juror: false },
      { name: "Osten Taylor",       gender: "m", placement: 11, merge: false, juror: false },
      { name: "Trish Dunn",         gender: "f", placement: 13, merge: false, juror: false },
      { name: "Ryan Shoulders",     gender: "m", placement: 15, merge: false, juror: false },
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
    id: 10, name: "Palau", year: 2005,
    tribes: [
      { name: "Koror", color: "#663300", players: [
      { name: "Coby Archa",        gender: "m" },
      { name: "Gregg Carey",       gender: "m" },
      { name: "Katie Gallagher",   gender: "f" },
      { name: "Caryn Groedel",     gender: "f" },
      { name: "Jenn Lyon",         gender: "f" },
      { name: "Ian Rosenberger",   gender: "m" },
      { name: "Willard Smith",     gender: "m" },
      { name: "Janu Tornell",      gender: "f" },
      { name: "Tom Westman",       gender: "m" },
      ]},
      { name: "Ulong", color: "#013399", players: [
      { name: "Ashlee Ashby",      gender: "f" },
      { name: "Bobby Jon Drinkard",gender: "m" },
      { name: "Angie Jakusz",      gender: "f" },
      { name: "Jolanda Jones",     gender: "f" },
      { name: "Stephenie LaGrossa",gender: "f" },
      { name: "James Miller",      gender: "m" },
      { name: "Kim Mullen",        gender: "f" },
      { name: "Ibrehem Rahman",    gender: "m" },
      { name: "Jeff Wilson",       gender: "m" },
      ]}
    ]
  },
  {
    id: 11, name: "Guatemala", year: 2005,
    tribes: [
      { name: "Nakúm", color: "#ffcc33", players: [
      { name: "Brandon Bellinger",  gender: "m" },
      { name: "Danni Boatwright",   gender: "f" },
      { name: "Margaret Bobonich",  gender: "f" },
      { name: "Bobby Jon Drinkard", gender: "m" },
      { name: "Cindy Hall",         gender: "f" },
      { name: "Jim Lynch",          gender: "m" },
      { name: "Judd Sergeant",      gender: "m" },
      { name: "Brooke Struck",      gender: "f" },
      { name: "Blake Towsley",      gender: "m" },
      ]},
      { name: "Yaxhá", color: "#65cccc", players: [
      { name: "Brian Corridan",     gender: "m" },
      { name: "Gary Hogeboom",      gender: "m" },
      { name: "Rafe Judkins",       gender: "m" },
      { name: "Stephenie LaGrossa", gender: "f" },
      { name: "Morgan McDevitt",    gender: "f" },
      { name: "Lydia Morales",      gender: "f" },
      { name: "Jamie Newton",       gender: "m" },
      { name: "Amy O'Hara",         gender: "f" },
      { name: "Brianna Varela",     gender: "f" },
      ]}
    ]
  },
  {
    id: 12, name: "Panama", year: 2006,
    tribes: [
      { name: "Bayoneta", color: "#00ccff", players: [
      { name: "Danielle DiLorenzo",  gender: "f" },
      { name: "Misty Giles",         gender: "f" },
      { name: "Courtney Marit",      gender: "f" },
      { name: "Sally Schumann",      gender: "f" },
      ]},
      { name: "Casaya", color: "#990099", players: [
      { name: "Cirie Fields",        gender: "f" },
      { name: "Melinda Hyder",       gender: "f" },
      { name: "Ruth Marie Milliman", gender: "f" },
      { name: "Tina Scheer",         gender: "f" },
      ]},
      { name: "La Mina", color: "#ff6600", players: [
      { name: "Dan Barry",           gender: "m" },
      { name: "Terry Deitz",         gender: "m" },
      { name: "Bruce Kanegai",       gender: "m" },
      { name: "Shane Powers",        gender: "m" },
      ]},
      { name: "Viveros", color: "#65cc33", players: [
      { name: "Aras Baskauskas",     gender: "m" },
      { name: "Austin Carty",        gender: "m" },
      { name: "Bobby Mason",         gender: "m" },
      { name: "Nick Stanbury",       gender: "m" },
      ]}
    ]
  },
  {
    id: 13, name: "Cook Islands", year: 2006,
    tribes: [
      { name: "Aitutaki", color: "#cc0100", players: [
      { name: "Ozzy Lusth",         gender: "m", placement:  2, merge: true,  juror: false },
      { name: "Cristina Coria",     gender: "f", placement: 14, merge: false, juror: false },
      { name: "J.P. Calderon",      gender: "m", placement: 17, merge: false, juror: false },
      { name: "Cecilia Mansilla",   gender: "f", placement: 18, merge: false, juror: false },
      { name: "Billy Garcia",       gender: "m", placement: 19, merge: false, juror: false },
      ]},
      { name: "Manihiki", color: "#ffcc33", players: [
      { name: "Sundra Oakley",      gender: "f", placement:  4, merge: true,  juror: true  },
      { name: "Nate Gonzalez",      gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Rebecca Borman",     gender: "f", placement: 11, merge: true,  juror: true  },
      { name: "Stephannie Favor",   gender: "f", placement: 16, merge: false, juror: false },
      { name: "Sekou Bunch",        gender: "m", placement: 20, merge: false, juror: false },
      ]},
      { name: "Puka Puka", color: "#009933", players: [
      { name: "Yul Kwon",           gender: "m", placement:  1, merge: true,  juror: false },
      { name: "Becky Lee",          gender: "f", placement:  3, merge: true,  juror: false },
      { name: "Jenny Guzon-Bae",    gender: "f", placement: 10, merge: true,  juror: true  },
      { name: "Brad Virata",        gender: "m", placement: 12, merge: true,  juror: true  },
      { name: "Cao Boi Bui",        gender: "m", placement: 15, merge: false, juror: false },
      ]},
      { name: "Rarotonga", color: "#000099", players: [
      { name: "Adam Gentry",        gender: "m", placement:  5, merge: true,  juror: true  },
      { name: "Parvati Shallow",    gender: "f", placement:  6, merge: true,  juror: true  },
      { name: "Jonathan Penner",    gender: "m", placement:  7, merge: true,  juror: true  },
      { name: "Candice Woodcock",   gender: "f", placement:  8, merge: true,  juror: true  },
      { name: "Jessica Smith",      gender: "f", placement: 13, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 14, name: "Fiji", year: 2007,
    tribes: [
      { name: "Moto", color: "#66ff33", players: [
      { name: "Alex Angarita",      gender: "m" },
      { name: "Boo Bernis",         gender: "m" },
      { name: "Cassandra Franklin", gender: "f" },
      { name: "Dreamz Herd",        gender: "m" },
      { name: "Edgardo Rivera",     gender: "m" },
      { name: "Lisi Linares",       gender: "f" },
      { name: "Liliana Gomez",      gender: "f" },
      { name: "Stacy Kimball",      gender: "f" },
      { name: "Gary Stritesky",     gender: "m" },
      ]},
      { name: "Ravu", color: "#ff6632", players: [
      { name: "Yau-Man Chan",       gender: "m" },
      { name: "Earl Cole",          gender: "m" },
      { name: "Jessica deBen",      gender: "f" },
      { name: "Erica Durousseau",   gender: "f" },
      { name: "Sylvia Kwan",        gender: "f" },
      { name: "Mookie Lee",         gender: "m" },
      { name: "Rocky Reid",         gender: "m" },
      { name: "Anthony Robinson",   gender: "m" },
      { name: "Rita Verreos",       gender: "f" },
      { name: "Michelle Yi",        gender: "f" },
      ]}
    ]
  },
  {
    id: 15, name: "China", year: 2007,
    tribes: [
      { name: "Fei Long", color: "#cc0100", players: [
      { name: "Jean-Robert Bellande",gender: "m" },
      { name: "James Clement",       gender: "m" },
      { name: "Todd Herzog",         gender: "m" },
      { name: "Amanda Kimmel",       gender: "f" },
      { name: "Denise Martin",       gender: "f" },
      { name: "Leslie Nease",        gender: "f" },
      { name: "Aaron Reisberger",    gender: "m" },
      { name: "Courtney Yates",      gender: "f" },
      ]},
      { name: "Zhan Hu", color: "#ffcc33", players: [
      { name: "Dave Cruser",         gender: "m" },
      { name: "Jaime Dugan",         gender: "f" },
      { name: "Erik Huffman",        gender: "m" },
      { name: "Peih-Gee Law",        gender: "f" },
      { name: "Sherea Lloyd",        gender: "f" },
      { name: "Ashley Massaro",      gender: "f" },
      { name: "Chicken Morris",      gender: "m" },
      { name: "Frosti Zernow",       gender: "m" },
      ]}
    ]
  },
  {
    id: 16, name: "Micronesia", year: 2008,
    tribes: [
      { name: "Airai", color: "#ff9933", players: [
      { name: "Joel Anderson",       gender: "m" },
      { name: "Natalie Bolton",      gender: "f" },
      { name: "Mikey Bortone",       gender: "m" },
      { name: "Tracy Hughes-Wolf",   gender: "f" },
      { name: "Alexis Jones",        gender: "f" },
      { name: "Erik Reichenbach",    gender: "m" },
      { name: "Mary Sartain",        gender: "f" },
      { name: "Jason Siska",         gender: "m" },
      { name: "Kathy Sleckman",      gender: "f" },
      { name: "Chet Welch",          gender: "m" },
      ]},
      { name: "Malakal", color: "#9966cc", players: [
      { name: "Yau-Man Chan",       gender: "m" },
      { name: "James Clement",       gender: "m" },
      { name: "Ami Cusack",          gender: "f" },
      { name: "Jon Dalton",         gender: "m"},
      { name: "Cirie Fields",        gender: "f" },
      { name: "Amanda Kimmel",       gender: "f" },
      { name: "Ozzy Lusth",          gender: "m" },
      { name: "Eliza Orlins",        gender: "f" },
      { name: "Jonathan Penner",     gender: "m" },
      { name: "Parvati Shallow",     gender: "f" },
      ]}
    ]
  },
  {
    id: 17, name: "Gabon", year: 2008,
    tribes: [
      { name: "Fang", color: "#ff3333", players: [
      { name: "Randy Bailey",        gender: "m" },
      { name: "GC Brown",          gender: "m" },
      { name: "Michelle Chase",      gender: "f" },
      { name: "Crystal Cox",         gender: "f" },
      { name: "Ken Hoang",           gender: "m" },
      { name: "Dan Kay",             gender: "m" },
      { name: "Gillian Larson",      gender: "f" },
      { name: "Susie Smith",         gender: "f" },
      { name: "Matty Whitmore",      gender: "m" },
      ]},
      { name: "Kota", color: "#ffff33", players: [
      { name: "Jacquie Berg",        gender: "f" },
      { name: "Bob Crowley",         gender: "m" },
      { name: "Kelly Czarnecki",     gender: "f" },
      { name: "Ace Gordon",          gender: "m" },
      { name: "Charlie Herschel",    gender: "m" },
      { name: "Corinne Kaplan",      gender: "f" },
      { name: "Sugar Kiper",         gender: "f" },
      { name: "Marcus Lehman",       gender: "m" },
      { name: "Paloma Soto-Castillo",gender: "f" },
      ]}
    ]
  },
  {
    id: 18, name: "Tocantins", year: 2009,
    tribes: [
      { name: "Jalapao", color: "#cc3232", players: [
      { name: "Sandy Burgin",        gender: "f" },
      { name: "Joe Dowdle",          gender: "m" },
      { name: "Spencer Duhm",        gender: "m" },
      { name: "Carolina Eastwood",   gender: "f" },
      { name: "Stephen Fishbach",    gender: "m" },
      { name: "Taj Johnson-George",  gender: "f" },
      { name: "J.T. Thomas",         gender: "m" },
      { name: "Sydney Wheeler",      gender: "f" },
      
      ]},
      { name: "Timbira", color: "#000000", players: [
      { name: "Tyson Apostol",       gender: "m" },
      { name: "Debbie Beebe",        gender: "f" },
      { name: "Erinn Lobdell",       gender: "f" },
      { name: "Sierra Reed",         gender: "f" },
      { name: "Jerry Sims",          gender: "m" },
      { name: "Candace Smith",       gender: "f" },
      { name: "Brendan Synnott",     gender: "m" },
      { name: "Coach Wade",          gender: "m" },
      ]}
    ]
  },
  {
    id: 19, name: "Samoa", year: 2009,
    tribes: [
      { name: "Foa Foa", color: "#ffcc33", players: [
      { name: "Betsy Bolan",         gender: "f" },
      { name: "Mike Borassi",        gender: "m" },
      { name: "Ben Browning",        gender: "m" },
      { name: "Marisa Calihan",      gender: "f" },
      { name: "Russell Hantz",       gender: "m" },
      { name: "Liz Kim",             gender: "f" },
      { name: "Jaison Robinson",     gender: "m" },
      { name: "Ashley Trainer",      gender: "f" },
      { name: "Mick Trimming",       gender: "m" },
      { name: "Natalie White",       gender: "f" },
      ]},
      { name: "Galu", color: "#983399", players: [
      { name: "Dave Ball",           gender: "m" },
      { name: "Erik Cardona",        gender: "m" },
      { name: "Brett Clouser",       gender: "m" },
      { name: "John Fincher",        gender: "m" },
      { name: "Yasmin Giles",        gender: "f" },
      { name: "Laura Morett",        gender: "f" },
      { name: "Monica Padilla",      gender: "f" },
      { name: "Kelly Sharbaugh",     gender: "f" },
      { name: "Russell Swan",        gender: "m" },
      { name: "Shambo Waters",       gender: "f" },
      ]}
    ]
  },
  {
    id: 20, name: "Heroes vs. Villains", year: 2010,
    tribes: [
      { name: "Heroes", color: "#0066cc", players: [
      ]},
      { name: "Villains", color: "#cc0100", players: [
      ]}
    ]
  },
  {
    id: 21, name: "Nicaragua", year: 2010,
    tribes: [
      { name: "Espada", color: "#013399", players: [
      ]},
      { name: "La Flor", color: "#ffcc02", players: [
      ]}
    ]
  },
  {
    id: 22, name: "Redemption Island", year: 2011,
    tribes: [
      { name: "Ometepe", color: "#ff9900", players: [
      ]},
      { name: "Zapatera", color: "#663399", players: [
      ]}
    ]
  },
  {
    id: 23, name: "South Pacific", year: 2011,
    tribes: [
      { name: "Savaii", color: "#ff3333", players: [
      ]},
      { name: "Upolu", color: "#013399", players: [
      ]}
    ]
  },
  {
    id: 24, name: "One World", year: 2012,
    tribes: [
      { name: "Manono", color: "#ff9933", players: [
      ]},
      { name: "Salani", color: "#65cccc", players: [
      ]}
    ]
  },
  {
    id: 25, name: "Philippines", year: 2012,
    tribes: [
      { name: "Kalabaw", color: "#cc0100", players: [
      ]},
      { name: "Matsing", color: "#3366ff", players: [
      ]},
      { name: "Tandang", color: "#ffff33", players: [
      ]}
    ]
  },
  {
    id: 26, name: "Caramoan", year: 2013,
    tribes: [
      { name: "Bikal", color: "#983399", players: [
      ]},
      { name: "Gota", color: "#ff6600", players: [
      ]}
    ]
  },
  {
    id: 27, name: "Blood vs. Water", year: 2013,
    tribes: [
      { name: "Galang", color: "#ffcc33", players: [
      ]},
      { name: "Tadhana", color: "#cc3232", players: [
      ]}
    ]
  },
  {
    id: 28, name: "Cagayan", year: 2014,
    tribes: [
      { name: "Aparri", color: "#ff9933", players: [
      ]},
      { name: "Luzon", color: "#009966", players: [
      ]},
      { name: "Solana", color: "#983366", players: [
      ]}
    ]
  },
  {
    id: 29, name: "San Juan del Sur", year: 2014,
    tribes: [
      { name: "Coyopa", color: "#ff9933", players: [
      ]},
      { name: "Hunahpu", color: "#65cccc", players: [
      ]}
    ]
  },
  {
    id: 30, name: "Worlds Apart", year: 2015,
    tribes: [
      { name: "Escameca", color: "#006598", players: [
      ]},
      { name: "Masaya", color: "#fecb04", players: [
      ]},
      { name: "Nagarote", color: "#cb0100", players: [
      ]}
    ]
  },
  {
    id: 31, name: "Cambodia", year: 2015,
    tribes: [
      { name: "Bayon", color: "#cc3266", players: [
      ]},
      { name: "Ta Keo", color: "#009999", players: [
      ]}
    ]
  },
  {
    id: 32, name: "Kaôh Rōng", year: 2016,
    tribes: [
      { name: "Chan Loh", color: "#013399", players: [
      ]},
      { name: "Gondol", color: "#ffcc02", players: [
      ]},
      { name: "To Tang", color: "#cc0100", players: [
      ]}
    ]
  },
  {
    id: 33, name: "Millennials vs. Gen X", year: 2016,
    tribes: [
      { name: "Takali", color: "#663399", players: [
      ]},
      { name: "Vanua", color: "#ff3300", players: [
      ]}
    ]
  },
  {
    id: 34, name: "Game Changers", year: 2017,
    tribes: [
      { name: "Mana", color: "#983301", players: [
      ]},
      { name: "Nuku", color: "#013365", players: [
      ]}
    ]
  },
  {
    id: 35, name: "Heroes vs. Healers vs. Hustlers", year: 2017,
    tribes: [
      { name: "Levu", color: "#006699", players: [
      ]},
      { name: "Soko", color: "#ffcc33", players: [
      ]},
      { name: "Yawa", color: "#cc3232", players: [
      ]}
    ]
  },
  {
    id: 36, name: "Ghost Island", year: 2018,
    tribes: [
      { name: "Malolo", color: "#ff9933", players: [
      ]},
      { name: "Naviti", color: "#983399", players: [
      ]}
    ]
  },
  {
    id: 37, name: "David vs. Goliath", year: 2018,
    tribes: [
      { name: "David", color: "#ff9900", players: [
      ]},
      { name: "Goliath", color: "#663399", players: [
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
      { name: "Tony Vlachos",         gender: "m", placement:  1, merge: true,  juror: false },
      { name: "Sophie Clarke",        gender: "f", placement: 10, merge: true,  juror: true  },
      { name: "Tyson Apostol",        gender: "m", placement: 11, merge: true,  juror: true  },
      { name: "Wendell Holland",      gender: "m", placement: 13, merge: true,  juror: true  },
      { name: "Yul Kwon",             gender: "m", placement: 14, merge: false, juror: true  },
      { name: "Sandra Diaz-Twine",    gender: "f", placement: 15, merge: false, juror: false },
      { name: "Kim Spradlin-Wolfe",   gender: "f", placement:  9, merge: true,  juror: true  },
      { name: "Nick Wilson",          gender: "m", placement:  7, merge: true,  juror: true  },
      { name: "Sarah Lacina",         gender: "f", placement:  4, merge: true,  juror: true  },
      { name: "Amber Mariano",        gender: "f", placement: 20, merge: false, juror: true  },
      ]},
      { name: "Sele", color: "#013399", players: [
      { name: "Natalie Anderson",     gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Michele Fitzgerald",   gender: "f", placement:  3, merge: true,  juror: false },
      { name: "Ben Driebergen",       gender: "m", placement:  5, merge: true,  juror: true  },
      { name: "Denise Stapley",       gender: "f", placement:  6, merge: true,  juror: true  },
      { name: "Jeremy Collins",       gender: "m", placement:  8, merge: true,  juror: true  },
      { name: "Adam Klein",           gender: "m", placement: 12, merge: true,  juror: true  },
      { name: "Parvati Shallow",      gender: "f", placement: 16, merge: false, juror: true  },
      { name: "Rob Mariano",          gender: "m", placement: 17, merge: false, juror: true  },
      { name: "Ethan Zohn",           gender: "m", placement: 18, merge: false, juror: true  },
      { name: "Danni Boatwright",     gender: "f", placement: 19, merge: false, juror: true  },
      ]}
    ]
  },
  {
    id: 41, name: "Survivor 41", year: 2021,
    tribes: [
      { name: "Luvu", color: "#65ccff", players: [
      { name: "Erika Casupanan",   gender: "f", placement:  1, merge: true,  juror: false },
      { name: "DeShawn Radden",    gender: "m", placement:  2, merge: true,  juror: false },
      { name: "Heather Aldret",    gender: "f", placement:  4, merge: true,  juror: true  },
      { name: "Danny McCray",      gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Naseer Muttalif",   gender: "m", placement: 10, merge: true,  juror: true  },
      { name: "Sydney Segal",      gender: "f", placement: 12, merge: true,  juror: false, mergatory: true },
      ]},
      { name: "Ua", color: "#99cc66", players: [
      { name: "Ricard Foyé",       gender: "m", placement:  5, merge: true,  juror: true  },
      { name: "Shan Smith",        gender: "f", placement:  8, merge: true,  juror: true  },
      { name: "Genie Chen",        gender: "f", placement: 13, merge: false, juror: false },
      { name: "JD Robinson",       gender: "m", placement: 14, merge: false, juror: false },
      { name: "Brad Reese",        gender: "m", placement: 15, merge: false, juror: false },
      { name: "Sara Wilson",       gender: "f", placement: 17, merge: false, juror: false },
      ]},
      { name: "Yase", color: "#ffff67", players: [
      { name: "Xander Hastings",   gender: "m", placement:  3, merge: true,  juror: false },
      { name: "Liana Wallace",     gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Evvie Jagoda",      gender: "f", placement:  9, merge: true,  juror: true  },
      { name: "Tiffany Seely",     gender: "f", placement: 11, merge: true,  juror: true  },
      { name: "David Voce",        gender: "m", placement: 16, merge: false, juror: false },
      { name: "Eric Abraham",      gender: "m", placement: 18, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 42, name: "Survivor 42", year: 2022,
    tribes: [
      { name: "Ika", color: "#0099cb", players: [
      { name: "Romeo Escobar",        gender: "m", placement:  3, merge: true,  juror: false },
      { name: "Drea Wheeler",         gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Tori Meehan",          gender: "f", placement:  9, merge: true,  juror: true  },
      { name: "Rocksroy Bailey",      gender: "m", placement: 10, merge: true,  juror: true  },
      { name: "Swati Goel",           gender: "f", placement: 14, merge: false, juror: false },
      { name: "Zach Wurtenberger",    gender: "m", placement: 17, merge: false, juror: false },
      ]},
      { name: "Taku", color: "#ff9900", players: [
      { name: "Maryanne Oketch",      gender: "f", placement:  1, merge: true,  juror: false },
      { name: "Jonathan Young",       gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Lindsay Dolashewich",  gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Omar Zaheer",          gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Marya Sherron",        gender: "f", placement: 16, merge: false, juror: false },
      { name: "Jackson Fox",          gender: "m", placement: 18, merge: false, juror: false },
      ]},
      { name: "Vati", color: "#34cc66", players: [
      { name: "Mike Turner",          gender: "m", placement:  2, merge: true,  juror: false },
      { name: "Hai Giang",            gender: "m", placement:  8, merge: true,  juror: true  },
      { name: "Chanelle Howell",      gender: "f", placement: 11, merge: true,  juror: true  },
      { name: "Lydia Meredith",       gender: "f", placement: 12, merge: true,  juror: false, mergatory: true },
      { name: "Daniel Strunk",        gender: "m", placement: 13, merge: false, juror: false },
      { name: "Jenny Kim",            gender: "f", placement: 15, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 43, name: "Survivor 43", year: 2022,
    tribes: [
      { name: "Baka", color: "#f7e32d", players: [
      { name: "Mike Gabler",        gender: "m", placement:  1, merge: true,  juror: false },
      { name: "Owen Knight",        gender: "m", placement:  3, merge: true,  juror: false },
      { name: "Sami Layadi",        gender: "m", placement:  7, merge: true,  juror: true  },
      { name: "Jeanine Zheng",      gender: "f", placement: 11, merge: true,  juror: true  },
      { name: "Elie Scott",         gender: "f", placement: 13, merge: true,  juror: false, mergatory: true },
      { name: "Morriah Young",      gender: "f", placement: 18, merge: false, juror: false },
      ]},
      { name: "Coco", color: "#15bcf0", players: [
      { name: "Cassidy Clark",      gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Karla Cruz Godoy",   gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Ryan Medrano",       gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "James Jones",        gender: "m", placement: 10, merge: true,  juror: true  },
      { name: "Geo Bustamante",     gender: "m", placement: 14, merge: false, juror: false },
      { name: "Lindsay Carmine",    gender: "f", placement: 15, merge: false, juror: false },
      ]},
      { name: "Vesi", color: "#fc5f65", players: [
      { name: "Jesse Lopez",        gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Cody Assenmacher",   gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Noelle Lambert",     gender: "f", placement:  8, merge: true,  juror: true  },
      { name: "Dwight Moore",       gender: "m", placement: 12, merge: true,  juror: false },
      { name: "Nneka Ejere",        gender: "f", placement: 16, merge: false, juror: false },
      { name: "Justine Brennan",    gender: "f", placement: 17, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 44, name: "Survivor 44", year: 2023,
    tribes: [
      { name: "Ratu", color: "#ff9c43", players: [
      { name: "Lauren Harpe",             gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Jaime Lynn Ruiz",          gender: "f", placement:  6, merge: true,  juror: true  },
      { name: "Kane Fritzler",            gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Brandon Cottom",           gender: "m", placement: 10, merge: true,  juror: true  },
      { name: "Matthew Grinstead-Mayle",  gender: "m", placement: 13, merge: false, juror: false },
      { name: "Maddy Pomilla",            gender: "f", placement: 17, merge: false, juror: false },
      ]},
      { name: "Soka", color: "#80e962", players: [
      { name: "Heidi Lagares-Greenblatt", gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Danny Massa",              gender: "m", placement:  7, merge: true,  juror: true  },
      { name: "Frannie Marin",            gender: "f", placement:  8, merge: true,  juror: true  },
      { name: "Matt Blankinship",         gender: "m", placement: 11, merge: true,  juror: true  },
      { name: "Josh Wilder",              gender: "m", placement: 12, merge: true,  juror: false, mergatory: true },
      { name: "Claire Rafson",            gender: "f", placement: 15, merge: false, juror: false },
      ]},
      { name: "Tika", color: "#d6a9f4", players: [
      { name: "Yam Yam Arocho",          gender: "m", placement:  1, merge: true,  juror: false },
      { name: "Carolyn Wiger",           gender: "f", placement:  3, merge: true,  juror: false },
      { name: "Carson Garrett",          gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Sarah Wade",              gender: "f", placement: 14, merge: false, juror: false },
      { name: "Helen Li",                gender: "f", placement: 16, merge: false, juror: false },
      { name: "Bruce Perreault",         gender: "m", placement: 18, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 45, name: "Survivor 45", year: 2023,
    tribes: [
      { name: "Belo", color: "#01a0e7", players: [
      { name: "Jake O'Kane",       gender: "m", placement:  3, merge: true,  juror: false },
      { name: "Katurah Topps",     gender: "f", placement:  4, merge: true,  juror: true  },
      { name: "Bruce Perreault",   gender: "m", placement:  8, merge: true,  juror: true  },
      { name: "Kendra McQuarrie",  gender: "f", placement:  9, merge: true,  juror: true  },
      { name: "Kellie Nalbandian", gender: "f", placement: 10, merge: true,  juror: true  },
      { name: "Brando Meyer",      gender: "m", placement: 14, merge: false, juror: false },
      ]},
      { name: "Lulu", color: "#ffe12f", players: [
      { name: "Emily Flippen",     gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Kaleb Gebrewold",   gender: "m", placement: 11, merge: true,  juror: true  },
      { name: "Sean Edwards",      gender: "m", placement: 15, merge: false, juror: false },
      { name: "Sabiyah Broderick", gender: "f", placement: 16, merge: false, juror: false },
      { name: "Brandon Donlon",    gender: "m", placement: 17, merge: false, juror: false },
      { name: "Hannah Rose",       gender: "f", placement: 18, merge: false, juror: false },
      ]},
      { name: "Reba", color: "#fe5e59", players: [
      { name: "Dee Valladares",    gender: "f", placement:  1, merge: true,  juror: false },
      { name: "Austin Li Coon",    gender: "m", placement:  2, merge: true,  juror: false },
      { name: "Julie Allie",       gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Drew Basile",       gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Sifu Alsup",        gender: "m", placement: 12, merge: false, juror: false },
      { name: "J. Maya",           gender: "f", placement: 13, merge: true,  juror: false, mergatory: true },
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
      { name: "Rachel Lamont",      gender: "f", placement:  1, merge: true,  juror: false },
      { name: "Sam Phalen",         gender: "m", placement:  2, merge: true,  juror: false },
      { name: "Andy Rueda",         gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Sierra Wright",      gender: "f", placement: 11, merge: true,  juror: true  },
      { name: "Anika Dhar",         gender: "f", placement: 14, merge: false, juror: false },
      { name: "Jon Lovett",         gender: "m", placement: 18, merge: false, juror: false },
      ]},
      { name: "Lavo", color: "#fc5f65", players: [
      { name: "Genevieve Mushaluk", gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Teeny Chirichillo",  gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Sol Yi",             gender: "m", placement: 10, merge: true,  juror: true  },
      { name: "Rome Cooney",        gender: "m", placement: 13, merge: true,  juror: false, mergatory: true },
      { name: "Kishan Patel",       gender: "m", placement: 15, merge: false, juror: false },
      { name: "Aysha Welch",        gender: "f", placement: 16, merge: false, juror: false },
      ]},
      { name: "Tuku", color: "#049fdd", players: [
      { name: "Sue Smey",           gender: "f", placement:  3, merge: true,  juror: false },
      { name: "Caroline Vidmar",    gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Kyle Ostwald",       gender: "m", placement:  8, merge: true,  juror: true  },
      { name: "Gabe Ortis",         gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Tiyana Hallums",     gender: "f", placement: 12, merge: false, juror: false },
      { name: "TK Foster",          gender: "m", placement: 17, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 48, name: "Survivor 48", year: 2025,
    tribes: [
      { name: "Civa", color: "#feb93c", players: [
      { name: "Kyle Fraser",        gender: "m", placement:  1, merge: true,  juror: false },
      { name: "Kamilla Karthigesu", gender: "f", placement:  4, merge: true,  juror: true  },
      { name: "Mitch Guerra",       gender: "m", placement:  5, merge: true,  juror: true  },
      { name: "David Kinne",        gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Chrissy Sarnowsky",  gender: "f", placement: 10, merge: true,  juror: true  },
      { name: "Charity Nelms",      gender: "f", placement: 13, merge: true,  juror: false, mergatory: true },
      ]},
      { name: "Lagi", color: "#e365c7", players: [
      { name: "Eva Erickson",       gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Joe Hunter",         gender: "m", placement:  3, merge: true,  juror: false },
      { name: "Shauhin Davari",     gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Star Toomey",        gender: "f", placement:  8, merge: true,  juror: true  },
      { name: "Bianca Roses",       gender: "f", placement: 14, merge: false, juror: false },
      { name: "Thomas Krottinger",  gender: "m", placement: 15, merge: false, juror: false },
      ]},
      { name: "Vula", color: "#a8f496", players: [
      { name: "Mary Zheng",         gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Cedrek McFadden",    gender: "m", placement: 11, merge: true,  juror: true  },
      { name: "Saiounia Hughley",   gender: "f", placement: 12, merge: false, juror: false },
      { name: "Justin Pioppi",      gender: "m", placement: 16, merge: false, juror: false },
      { name: "Kevin Leung",        gender: "m", placement: 17, merge: false, juror: false },
      { name: "Stephanie Berger",   gender: "f", placement: 18, merge: false, juror: false },
      ]}
    ]
  },
  {
    id: 49, name: "Survivor 49", year: 2025,
    tribes: [
      { name: "Hina", color: "#feda47", players: [
      { name: "MC Chukwujekwu",        gender: "f", placement: 10, merge: true,  juror: true  },
      { name: "Kristina Mills",         gender: "f", placement:  5, merge: true,  juror: true  },
      { name: "Steven Ramm",            gender: "m", placement:  6, merge: true,  juror: true  },
      { name: "Sophie Segreti",         gender: "f", placement:  7, merge: true,  juror: true  },
      { name: "Jason Treul",            gender: "m", placement: 13, merge: false, juror: false },
      { name: "Matt Williams",          gender: "m", placement: 14, merge: false, juror: false },
      ]},
      { name: "Kele", color: "#32aad6", players: [
      { name: "Sophi Balerdi",          gender: "f", placement:  2, merge: true,  juror: false },
      { name: "Alex Moore",             gender: "m", placement:  9, merge: true,  juror: true  },
      { name: "Annie Davis",            gender: "f", placement: 17, merge: false, juror: false },
      { name: "Jeremiah Ing",           gender: "m", placement: 15, merge: false, juror: false },
      { name: "Jake Latimer",           gender: "m", placement: 16, merge: false, juror: false },
      { name: "Nicole Mazullo",         gender: "f", placement: 18, merge: false, juror: false },
      ]},
      { name: "Uli", color: "#f16b52", players: [
      { name: "Savannah Louie",         gender: "f", placement:  1, merge: true,  juror: false },
      { name: "Sage Ahrens-Nichols",    gender: "f", placement:  3, merge: true,  juror: false },
      { name: "Rizo Velovic",           gender: "m", placement:  4, merge: true,  juror: true  },
      { name: "Jawan Pitts",            gender: "m", placement:  8, merge: true,  juror: true  },
      { name: "Nate Moore",             gender: "m", placement: 11, merge: true,  juror: true  },
      { name: "Shannon Fairweather",    gender: "f", placement: 12, merge: false, juror: false },
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

// All appearances per player, in chronological order
const PLAYER_SEASONS = {};
SEASONS.forEach(s => s.tribes.forEach(t => t.players.forEach(p => {
  if (!PLAYER_SEASONS[p.name]) PLAYER_SEASONS[p.name] = [];
  PLAYER_SEASONS[p.name].push({ season: s, tribe: t, gender: p.gender });
})));
