// write a function inchToFeet() that recived inch and then covert to feet and return the result;

function inchToFeet(inch) {
  if (typeof inch === "number") {
    const result = inch / 12;
    return result;
  } else if (typeof inch === "string") {
    const numberCovert = Number(inch);
    const result = numberCovert / 12;
    return result;
  } else {
    return "Invalid Input";
  }
}
const output1 = inchToFeet(1);
console.log(output1);
