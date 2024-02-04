// Task-1:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function countedElement(arr, num) {
  let count = 0;
  for (const key of arr) {
    if (key === num) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5, 55, 55, 41, 55];
const output = countedElement(numbers, 55);
console.log(output);
