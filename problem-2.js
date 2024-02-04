// Task-2:
// Write a function to count the number of vowels in a string.
const vowels = ["a", "e", "i", "o", "u"];
function countedVowels(arr, str) {
  let count = 0;
  const strSplit = str.split("");
  for (const vowelsKey of arr) {
    for (const strKey of strSplit) {
      if (vowelsKey === strKey) {
        count++;
      }
    }
  }
  return count;
}

const output = countedVowels(vowels, "aaaaaeee");
console.log(output);
