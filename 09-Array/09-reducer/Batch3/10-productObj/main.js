// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name

// ```js
// const products = [
//   { id: 1, name: 'Crystal' },
//   { id: 4, name: 'Namthip' },
//   { id: 5, name: 'Nestle' }
// ];
// // { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

// ```

const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };
console.log(products);

const result = products.reduce(function (acc, item) {
  let currentkey = acc[item];
  console.log(currentkey);
  if (currentkey) {
    acc[item] = acc.id + acc[item];
  }
  return acc;
}, []);
