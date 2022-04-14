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

// Exercise 2
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

// Exercise 3
// Create a program that prompts for a quote and an author. Display the quotation and author as shown here: [Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values.
// constraints : the author must not contain numbers, max 35, normal alphabet. For the quote max 50 char
// I have a word to say

// start
// INITIALIZE variable author = ""
// INITIALIZE variable quote = ""
// PROMPT for author "What's your name"
// If author includes number
//      print out "type a letter, baliz"
// else if author length is more than 35 char.
//      print out "max. letters exceeded"
// PROMPT for quote "Your Quote"
// If quote length is more than 50 char.
//      print out "max. letters exceeded"
// print out author + " says, " + quote + "."
// end

// Exercise 4
// Definition: Mad Libs are a simple game where you create a story template with blanks for words. You or another player then construct a list of words and place them into the story, creating an often silly or funny story as result.
// constraints : no numbers, max 20 char

// story : Many years ago in Denmark there was a prince called Hamlet. One day Hamlet’s father, the king, dies suddenly and Hamlet is very sad. After this, Hamlet’s mother, Gertrude, gets married again very quickly. She marries her husband’s brother, Claudius, and Claudius is now the king! ‘Aargh! How could you do this to me!’

// INITIALIZE variable noun = ""
// INITIALIZE variable verb = ""
// INITIALIZED variable adverb = ""
// INITIALIZED variable adjective = ""
// PROMPT for noun "write a noun"
// If noun includes numbers
//    print out "no numbers"
// else if noun longer than 20 char.
//    print out "too long, try again"
// PROMPT for verb "write a verb"
// If verb includes numbers
//    print out "no numbers"
// else if verb longer than 20 char.
//    print out "too long, try again"
// PROMPT for adverb "write an adverb"
// If adverb includes numbers
//    print out "no numbers"
// else if adverb longer than 20 char.
//    print out "too long, try again"
// PROMPT for adjective "write an adjective"
// If adjective includes numbers
//    print out "no numbers"
// else if adjective longer than 20 char.
//    print out "too long, try again"
// print out "Many years ago in " + noun +
// "there was a prince called Hamlet.One day Hamlet’s father, the king, " + verb +
// "suddenly and Hamlet is very sad.After this, Hamlet’s mother, Gertrude, gets married again very" + adverb +
// ".She marries her + adjective +
// "husband’s brother, Claudius, and Claudius is now the king! ‘Aargh! How could you do this to me!’"
