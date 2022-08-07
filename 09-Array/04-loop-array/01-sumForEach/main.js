// จงหาผลรวมของ element ใน array โดยใช้ forEach

// ```js
// const array = [29, 17, 13, 47, 23, 31];

// ```

const array = [29, 17, 13, 47, 23, 31];

let result = 0;

// for (let i = 0; i < array.length; i++) {
//   result += array[i];
// }

function runeveryitem(item, index, array) {
  result += item;
}
array.forEach(runeveryitem);

console.log(result); //?
