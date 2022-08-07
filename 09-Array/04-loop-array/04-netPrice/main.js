// - จงสร้างตัวแปร summary โดยใช้ค่ปร sales
// - netPrice = price x discount (ถ้าไม่าจากตัวแมี discount ให้ถือว่า netPrice = price)

// ```js
// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 }
// ];

// const summary = [
//   { netPrice: 900 },
//   { netPrice: 475 },
//   { netPrice: 100 }
// ];
// ```

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

let summary = 0; // ประกาศตัวแปร

function calsummary(salesarray) {
  //
  const summaryarray = [];

  for (let item of salesarray) {
    let currentObj = {};
    let netPrice;
    if (item.discount) {
      netPrice = item.price * (1 - item.discount);
    } else {
      netPrice = item.price;
    }

    currentObj.netprice = netPrice;
    summaryarray.push(currentObj);
  }
  return summaryarray;
}

console.log();
