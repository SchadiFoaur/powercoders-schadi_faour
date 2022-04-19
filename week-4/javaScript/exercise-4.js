// Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.
// constraints : max. 50 char.
// string length counter

// start
// INITIALIZE var string = ""
// PROMPT for string "Type something"
// INITIALIZE var length = 0
// for char in string
//    length = length + 1 (add 1 to the length)
// If char length is more than 50 char.
//    print out "max. letters exceeded"
// else
//    print out string + length
// end
let string = prompt("Type Something", "Hoga loga");
let length = 0;
for (let i = 0; i <= string.length; i++) {
  length = length + 1;
}
alert(length);
