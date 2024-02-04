const marks = [50, 40, 60, 80, 95, 75];

function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (max < num) {
      max = num;
    }
  }

  return max;
}

const output = getMax(marks);
console.log(output);
