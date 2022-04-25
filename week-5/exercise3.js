//@ts-check
// Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output as shown in the example that follows on the next slide.
// List inputs, outputs, processes in a text file.
// What are the constraints? Any edge case to consider? Note in your text file.
// Write the steps of your algorithm in pseudo-code in a second text file.
// Write the program in JavaScript. Find out how to get the current year from your computer.
// Push all 3 files (1 js and 2 txt) to your Github account.

let sum;
const currentYear = new Date().getFullYear();
function retirement() {
  let age = prompt("add your age", "20");
  let age2 = prompt("add the age you want to retire in", "65");
  if (Number(age) >= 64) {
    alert("Too old for this!");
  } else if (age === "") {
    alert("add your age");
  }
  if (Number(age) < 64) {
    sum = Number(age2) - Number(age);
  }
  let newYear = sum + currentYear;
  alert("It's " + currentYear + " . So you can retire in " + newYear);
  return sum;
}
