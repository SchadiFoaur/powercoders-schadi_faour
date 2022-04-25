//@ts-check
// Declare 2 variables, both numbers
// Compare which number is greater
// Log the output, e.g. "The greater number of 5 and 10 is 10."
// Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."
let num1 = 52820;
let num2 = 650;
function compare() {
  if (num1 < num2) {
    console.log(
      "The smaller number of " + num1 + " and " + num2 + " is " + num1
    );
  } else {
    console.log(
      "The bigger number of " + +num1 + " and " + num2 + " is " + num1
    );
  }
}
compare();
