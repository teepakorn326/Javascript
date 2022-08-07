// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

// ```js
// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5]
// ];
// // expected result: [0, 1, 2, 3, 4, 5]
// ```

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

function Reduce(flattened) {
  let flat = flattened.reduce((a, c) => a.concat(c), []);
  return flat;
}
console.log(Reduce(flattened));
