// @ts-check
// Prompt for a number between 0 and 10.
// Multiply the given number by 9.
// Log the result (e.g. "2 * 9 = 18").
let userName = prompt("0 - 10");
if (Number(userName) > 10) {
  alert("Error");
} else {
  let result = Number(userName) * 9;
  console.log(userName + " * 9 = " + result);
}
