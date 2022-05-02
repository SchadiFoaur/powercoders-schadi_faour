//@ts-check
/** declare list of authors based on img names
 * check for special characters in names and for more than one first/last name
 */
let authors = [
  {
    firstName: "Andreas",
    lastName: "Neeser",
  },
  {
    firstName: "Anna",
    lastName: "Camenisch",
  },
  {
    firstName: "Barbara",
    lastName: "Schibli",
  },
  {
    firstName: "Demian",
    lastName: "Leinhard",
  },
  {
    firstName: "Flurina",
    lastName: "Bader",
  },
  {
    firstName: "Franco",
    lastName: "Supino",
  },
  {
    firstName: "Lukas",
    lastName: "Hartmann",
  },
  {
    firstName: "Marius Daniel",
    lastName: "Popescu",
  },
  {
    firstName: "Reto",
    lastName: "Haenny",
  },
  {
    firstName: "Sandara",
    lastName: "Kuenzi",
  },
  {
    firstName: "Simon",
    lastName: "Libsig",
  },
];

/** create object per author */

let Author = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.imgUrl = `img/tile_${firstName.toLowerCase()}_${lastName.toLowerCase()}.jpg`;
  this.altText = `Portrait of ${firstName} ${lastName}`;
  this.link = `authors/${firstName.toLowerCase()}-${
    lastName.toLowerCase().html
  }`;
};

/** create function createTiles to create masonry tiles */

function createTiles(authors) {
  let tileList = [];
  authors.forEach((author) => {
    const currentAuthor = new Author(author.firstName, author.lastName);
    const liTag = document.createElement("li");
    tileList.push();
    const aTag = document.createElement("a");
    tileList.push();
    const imgTag = document.createElement("img");
    tileList.push();
    const h2Tag = document.createElement("h2");

    aTag.href = currentAuthor.link;
    imgTag.src = currentAuthor.imgUrl;
    imgTag.alt = currentAuthor.altText;
    h2Tag.textContent = currentAuthor.firstName + "" + currentAuthor.lastName;

    liTag.appendChild(aTag);
    aTag.appendChild(imgTag);
    aTag.appendChild(h2Tag);

    tileList.push(liTag);
  });
  return tileList;
}
console.log(authors);

/** create function addTiles to add all tiles to the DOM randomly */

/** add a eventListener on the logo to rebuild the list on click */
