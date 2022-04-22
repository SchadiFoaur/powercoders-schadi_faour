const numOfChildren = [1, 2, 3, 4, 5, 6];
const partner = [
  "Leah",
  "Sarah",
  "Carla",
  "Sponge Bob",
  "maya",
  "Fatima",
  "Suzan",
  "Amina",
  "Patrick",
];
const geo = [
  "the U.S.A",
  "Switzerland",
  "Germany",
  "Lebanon",
  "Iran",
  "Austria",
  "Egypt",
  "Syria",
];
const title = [
  "Software engineer",
  "Truck driver",
  "Teacher",
  "Ceo",
  "Entrepreneur",
  "Cook",
  "Hacker",
];
let randomKid = numOfChildren[Math.floor(Math.random() * numOfChildren.length)];
let randomPartner = partner[Math.floor(Math.random() * partner.length)];
let randomGeo = geo[Math.floor(Math.random() * geo.length)];
let randomTitle = title[Math.floor(Math.random() * title.length)];
console.log(
  "I will be married to a beautiful " +
    randomTitle +
    ". Her name is " +
    randomPartner +
    ". She's from " +
    randomGeo +
    " and I'll be having " +
    randomKid +
    " daughters with her!"
);
