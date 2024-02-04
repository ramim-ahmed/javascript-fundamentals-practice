const phones = [
  {
    name: "apple",
    price: 100,
  },
  {
    name: "oppo",
    price: 30,
  },
  {
    name: "nokia",
    price: 50,
  },
  {
    name: "symphony",
    price: 20,
  },
];

function getCheapestPhone(arr) {
  let chepestPhone = null;
  const initalPrice = arr[0]?.price;
  for (let i = 0; i < arr.length; i++) {
    const phone = arr[i];
    if (initalPrice > phone?.price) {
      chepestPhone = phone;
    }
  }
  return chepestPhone;
}

const output = getCheapestPhone(phones);
console.log(output);
