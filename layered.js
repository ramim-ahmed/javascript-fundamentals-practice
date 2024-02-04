function discountByLayared(quanty) {
  let totalCost = 0;
  if (quanty <= 100) {
    totalCost = quanty * 100;
  } else if (quanty <= 200) {
    const remainingDiscountQuantity = quanty - 100;
    const remainingDiscount = remainingDiscountQuantity * 90;
    const regularPrice = 100 * 100;
    totalCost = remainingDiscount + regularPrice;
  } else {
    const FirstRemainingDiscountQuantity = 100 * 100;
    const SecondremainingDiscount = 100 * 90;
    const regularPrice = quanty - 200;
    const lastFinalDiscoutn = regularPrice * 70;
    totalCost =
      FirstRemainingDiscountQuantity +
      SecondremainingDiscount +
      lastFinalDiscoutn;
  }
  return totalCost;
}

const output = discountByLayared(201);
console.log(output);
