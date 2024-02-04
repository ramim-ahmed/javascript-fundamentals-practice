const numbers = [10, 25, 22, 50, 55, 52, 20, 5];

function getMin(arr) {
  let min = arr[0];
  for (const num of arr) {
    if (min > num) {
      min = num;
    }
  }
  return min;
}

const output = getMin(numbers);
console.log(output);
