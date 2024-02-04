const cart = [
  {
    name: "Macbook M1 air",
    quanty: 5,
    price: 150,
  },
  {
    name: "Earphone",
    quanty: 2,
    price: 20,
  },
  {
    name: "Iphone",
    quanty: 1,
    price: 120,
  },
];

function shoppingCost(cart) {
  let total = 0;
  for (const item of cart) {
    total += item?.price * item?.quanty;
  }
  return total;
}

const totalCost = shoppingCost(cart);
console.log(totalCost);
