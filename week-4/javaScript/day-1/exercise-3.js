// Exercise 1
// Create a program that prompts for your name and prints a greeting using your name.
// constraints : It should accept letters, no numbers, normal alphabet, max 35 char.
// hello-name

// start
// INITIALIZE var name = ""
// PROMPT for name "What's your name"
// If name includes number
//      print out "type a letter, baliz"
// else if name length is more than 35 char.
//      print out "max. letters exceeded"
// print out "Hello" + name
// end
let myName = prompt("Please enter your name!", "Schadi");
if (myName !== null) {
  alert(`welcome ${myName}`);
}
