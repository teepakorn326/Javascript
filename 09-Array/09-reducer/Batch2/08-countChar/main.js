// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

// ```js
// let str = 'I live in Thailand';
// // expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
// ```

let str = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

let lower = str.toLowerCase();
const arrChar = lower.split("");
console.log(lower);
console.log(arrChar);

const result = arrChar.reduce(function (acc, item) {
  if (item.trim() != "") {
    let foundvalue = acc[item];
    if (foundvalue) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }
  }
  return acc;
}, {});

console.log(result);
