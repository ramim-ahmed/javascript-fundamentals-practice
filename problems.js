// Task -1:
// Find the lowest number in the array below.

const numbers = [167, 190, 120, 165, 137];

function findLowestElement(arr) {
  let lowest = arr[0];
  for (const num of arr) {
    if (lowest > num) {
      lowest = num;
    }
  }
  return lowest;
}

// Task -2:
// Find the friend with the smallest name.
const names = ["rahim", "robin", "rafi", "ron", "rashed"];

function findSmallestName(arr) {
  let smallestName = arr[0];
  for (const name of arr) {
    if (smallestName?.length > name?.length) {
      smallestName = name;
    }
  }
  return smallestName;
}

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(
  laptobQuantity,
  tabletsQuantity,
  mobileQuantity
) {
  const laptop = 35000 * laptobQuantity;
  const tablet = 15000 * tabletsQuantity;
  const mobile = 20000 * mobileQuantity;
  const totalBudget = laptop + tablet + mobile;
  return totalBudget;
}

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
//Input

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(arr) {
  let totalAmount = 0;
  for (const phone of arr) {
    totalAmount += phone?.price;
  }
  const totalPhone = arr?.length;
  const averageAmountByPhone = totalAmount / totalPhone;
  return averageAmountByPhone;
}

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalEmployeeSalaryByMonth(employees) {
  let totalYearlyIncrementSalary = 0;
  let totalSalary = 0;
  for (const employee of employees) {
    totalYearlyIncrementSalary += employee?.experience * employee?.increment;
    totalSalary += totalYearlyIncrementSalary + employee?.starting;
  }
  return totalSalary;
}

// const output = totalEmployeeSalaryByMonth(employees);
// console.log(output);
