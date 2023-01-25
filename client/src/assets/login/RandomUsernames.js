export default function randomUsernames(firstNames, lastNames) {
  const first = firstNames[Math.floor(Math.random()*firstNames.length)];
  const last = lastNames[Math.floor(Math.random()*lastNames.length)];
  const userName = first + last
  return userName
}

export const firstNames = [
  "Dry Bones",
  "Mario",
  "Luigi",
  "Princess Peach",
  "Toad",
  "Toadette",
  "Bowser",
  "Daisy",
  "Wario",
  "Waluigi",
  "Rosalina",
  "Goomba",
  "Koopa Troopa",
  "Koopalings",
  "Yoshi",
  "Baby Mario",
  "Baby Luigi",
  "Kamek",
  "Shy Guy",
  "Cappy",
  "Kirby",
  "King Dedede",
  "Meta Knight",
  "Whispy Woods",
  "Donkey Kong",
  "Diddy Kong",
  "Dixie Kong",
  "Cranky Kong",
  "Funky Kong",
  "Link",
  "Princess Zelda",
  "Ganondorf",
  "Epona",
  "Sheik",
  "Pikachu",
  "Deep Cut",
  "Mr. Coco",
  "Cap'n Cuttlefish",
  "Tom Nook",
  "Blathers",
  "K.K. Slider",
  "Kapp'n",	
  "Captain Olimar",
  "Pikmin",
  "Bulborb",
  "Roughraff",
  "Snotsolong",
  "Samus",
  "Fox",
  "Ninjara",
  "Mechanica",
  "Master Mummy",
  "Helix",
  "Byte & Barq",
  "Twintelle",
];

export const lastNames= [
  " Cutter",
  " Carpenter",
  " Clipper",
  " Countersinker",
  " Cutter",
  " Driller",
  " Edger",
  " Electricdriller",
  " Fastener",
  " Glasscutter",
  " Grinder",
  " Hacksawer",
  " Hammer",
  " Handsawer",
  " Hoe",
  " Machete",
  " Nails",
  " Nut",
  " Screwdriver",
  " Ratchet",
  " Reamer",
  " Scraper",
  " Screwer",
  " Screwdriver",
  " Sharpener",
  " Squeegee",
  " Stapler",
  " Tacktillertongs",
  " Woodworker",
]

console.log(randomUsernames(firstNames, lastNames))
console.log(randomUsernames(firstNames, lastNames))
console.log(randomUsernames(firstNames, lastNames))
console.log(randomUsernames(firstNames, lastNames))
console.log(randomUsernames(firstNames, lastNames))
console.log(randomUsernames(firstNames, lastNames))





