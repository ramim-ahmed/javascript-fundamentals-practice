// purchase list

const purchaseHistory = [
  {
    voucherNo: 101,
    companyName: "Square Pharma",
    paymentMode: "cash",
    date: "06/02/2024",
    productList: [
      {
        id: 50,
        name: "Napa 500mg tab",
        quantity: 500,
        total_price: 250,
        purchasePrice: 1,
        salePrice: 1.2,
      },
      {
        id: 51,
        name: "Napa Extra tab",
        quantity: 250,
        total_price: 500,
        purchasePrice: 2,
        salePrice: 2.5,
      },
    ],
  },
  {
    voucherNo: 505,
    companyName: "Incepta Pharma",
    paymentMode: "cash",
    date: "07/02/2024",
    productList: [
      {
        id: 50,
        name: "Napa 500mg tab",
        quantity: 500,
        total_price: 200,
        purchasePrice: 1,
        salePrice: 1.2,
      },
      {
        id: 51,
        name: "Napa Extra tab",
        quantity: 250,
        total_price: 420,
        purchasePrice: 2,
        salePrice: 2.5,
      },
    ],
  },
];

function getPurchaseReport(purchaseList, date) {
  for (const purchase of purchaseList) {
    if (purchase.date === date) {
      const headerTitle = `Voucher Number ${purchase.voucherNo} company ${purchase.companyName} paymode ${purchase.paymentMode} date ${purchase.date}`;
      console.log(headerTitle);
      const products = purchase.productList;
      let list;
      let totalPurchaseAmount = 0;
      for (const product of products) {
        list += `id: ${product.id} name: ${product.name} quantity: ${product.quantity} total_price: ${product.total_price} purchasePrice: ${product.purchasePrice} salePrice: ${product.salePrice} \n`;
        totalPurchaseAmount += product.total_price;
      }
      console.log(list);
      console.log("Total amount :", totalPurchaseAmount);
    }
  }
}

const output = getPurchaseReport(purchaseHistory, "07/02/2024");
