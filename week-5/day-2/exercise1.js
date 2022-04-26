// Do your Mad Lib exercise again:
// Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

// Write a function and store the variables in an array - or better an object?
function getRandom(array) {
  let randomItem = array[Math.floor(Math.random() * array.length)];
  return randomItem;
}
function getInput(text) {
  let array = [];
  for (let i = 0; i < 4; i++) {
    let inputWord = prompt(text);
    array.push(inputWord);
  }
  return array;
}
function getVerb() {
  const randomVerb = getRandom(getInput("type a verb"));
  return randomVerb;
}
function getNoun() {
  const randomNoun = getRandom(getInput("type a noun"));
  return randomNoun;
}
function getAdverb() {
  const randomAdverb = getRandom(getInput("type an adverb"));
  return randomAdverb;
}
function getAdjective() {
  const randomAdjective = getRandom(getInput("type an adjective"));
  return randomAdjective;
}
let story = `Many years ago in ${getNoun()} there was a prince called Hamlet. One day Hamlet's father, the king, ${getVerb()} suddenly and Hamlet is very ${getAdjective()}. After this, Hamlets mother, Gertrude, gets married again very ${getAdverb()}. She marries her husband's brother, Claudius, and Claudius is now the king! Aargh! How could you do this to me!`;
console.log(story);
