// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestString(str) {
  const splitStr = str.split(" ");
  let longestString = splitStr[0];
  for (const key of splitStr) {
    if (key.length > longestString.length) {
      longestString = key;
    }
  }
  return longestString;
}
const inputValue = "I love Country";
const output = findLongestString(inputValue);
console.log(output);
