// @ts-check
// Prompt for a number between 0 and 20.
// Check if the given number is even or odd.
// Report the result to the screen (e.g. "2 is even").

let userNumber = prompt("0-20");
if (Number(userNumber) > 20) {
  alert("Error");
} else if (Number(userNumber) <= 20 && Number(userNumber) % 2 === 0) {
  console.log("The number " + userNumber + " is even");
} else if (Number(userNumber) <= 20 && Number(userNumber) % 2 !== 0) {
  console.log("The number" + userNumber + " is odd");
}
