// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

// ```js
// let str = '31 45 12 67 34 86 23 37 19 41';

// ```
let str = "31 45 12 67 34 86 23 37 19 41";

const arrNum = str.split(" "); // สร้างเป็น array
console.log(arrNum);

let sum = arrNum.reduce(function (acc, item, index, array) {
  if (item < 40) {
    acc = acc + +item;
    console.log(acc);
  }
  return acc;
}, 0);

console.log(sum);
