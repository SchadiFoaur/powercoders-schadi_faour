// @ts-check
// Write a for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd.
// Report the result to the screen (e.g. "2 is even").

let num = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log("The number " + num[i] + " is even");
  } else {
    console.log("The number " + num[i] + " is odd");
  }
}
