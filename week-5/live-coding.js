/**
 * find the node
 * store it in a variable
 * manipulate
 */

let paragraph = document.querySelector("#changeMe");
let new_text = "The text was magically changed";
paragraph.innerText = new_text;

let list = document.querySelectorAll("li");
// for each loop
// list.forEach((li, index) => {
//   li.innerText = index + 1;
// });

// for off loop
for (let li of list) {
  //   li.innerText = li.innerText.substring(0, 4);
  li.innerText = li.innerText.replace("item", "");
}
