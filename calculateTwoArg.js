// simple calculate function that gives a two number calculation like , addition, substraction, muplication, division

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

const sum = calculate([10], [20], function (num1, num2) {
  return num1 / num2;
});
const substraction = calculate(10, 20, function (num1, num2) {
  return num1 - num2;
});
console.log(sum);
console.log(substraction);
