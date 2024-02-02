// understand closure concept

function shoppingCart() {
  let counter = 0;
  const cart = [];
  return function (obj) {
    counter++;
    cart.push([...cart, obj]);
  };
}

// call shoppingCart function
const addToCart = shoppingCart();
console.dir(addToCart);
addToCart({ title: "apple" });
addToCart({ title: "lenovo" });
