function cubeNumber(number) {
  if (typeof number !== "number") {
    const message = "Invalid Input! please give a positive number";
    return message;
  }
  const result = number * number * number;
  return result;
}
// const output = cubeNumber({});
// console.log(output);

function matchFinder(string1, string2) {
  if (string1?.length > 0 && string2?.length > 0) {
    const result = string1.includes(string2);
    if (result) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid Input!";
  }
}

// const output1 = matchFinder("John Doe", "ohn");
// const output2 = matchFinder("Javascript", "code");
// const output3 = matchFinder("Peter Parker", "Pen");
// const output4 = matchFinder("Peter Parker", "pet");
// const output5 = matchFinder("pet");
// console.log({ output1, output2, output3, output4, output5 });

function sortMaker(arr) {
  const firstElement = arr[0];
  const seceondElement = arr[1];
  let result = [];
  if (firstElement === seceondElement) {
    return "equal";
  } else {
    if (firstElement < 0 || seceondElement < 0) {
      return "Invalid Input!";
    } else {
      if (firstElement > seceondElement) {
        result.push(firstElement, seceondElement);
      } else {
        result.push(seceondElement, firstElement);
      }
    }
  }
  return result;
}
// const output1 = sortMaker([2, 3]);
// const output2 = sortMaker([4, 2]);
// const output3 = sortMaker([4, 4]);
// const output4 = sortMaker([1, 2]);
// const output5 = sortMaker([4, -2]);
// console.log({ output1, output2, output3, output4, output4, output5 });

function findAddress(obj) {
  const street = obj?.street || "__";
  const house = obj?.house || "__";
  const society = obj?.society || "__";
  const address = `${street} ${house} ${society}`;
  return address;
}

const obj1 = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};
const obj2 = {
  street: 10,
  society: "Earth Perfect",
};

const obj3 = {
  street: 10,
};
// const output1 = findAddress(obj1);
// const output2 = findAddress(obj2);
// const output3 = findAddress(obj3);
// console.log({ output1, output2, output3 });

function canPay(arr, number) {
  let myAmountTotal = 0;
  if (arr.length) {
    for (const amount of arr) {
      myAmountTotal += amount;
    }
    if (myAmountTotal >= number) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid Value";
  }
}

const output1 = canPay([1, 2, 5], 10);
const output2 = canPay([1, 4, 5], 10);
const output3 = canPay([], 10);
console.log({ output1, output2, output3 });
