// task-1
//Take four parameters. Multiply the four numbers and then return the result
// solution:

// declare the function
function multiplyes(num1, num2, num3, num4) {
  const total = num1 * num2 * num3 * num4;
  return total;
}
// call the function and assign the value of result
// const result = multiplyes(10, 25, 55, 10);
// console.log("task-1", result);

// task-2
//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and
// solution:

// declare the function
function oddAndEvenCheck(num) {
  if (num % 2 === 0) {
    return num / 2;
  }
  return num * 2;
}
//  invoke the function return value assign in result
// const result = oddAndEvenCheck(11);
// const result2 = oddAndEvenCheck(52);
// console.log(result);
// console.log(result2);

// task-3
//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
// solution:

// declare the make_avg function

function make_avg(numbers) {
  const length = numbers.length;
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  const avg = total / length;
  return avg;
}

// const average = make_avg([25, 22, 40, 55, 70]);
// console.log(average);

// task-4
//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
// solution:

// declare the function
function count_zero(binary) {
  let count = 0;
  for (const value of binary) {
    if (value === "0") {
      count = count + 1;
    }
  }
  console.log(count);
}

// invonke the function
// count_zero("10001010011101");

// task-5
//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
// solution:

// declare the function
function odd_even(num) {
  if (num % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

// invoke the function and return value assign in result;
// const result = odd_even(42);
// console.log(result);
