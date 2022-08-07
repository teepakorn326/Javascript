// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

// let sum = 0;
// let sumEven = 0;
// let sumOdd = 0;
// let sumEvenMulti = 0;
// let sumOddMulti = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
//   if (i % 2 == 0) {
//     sumEven += i;
//     sumEvenMulti += i ** 2;
//   } else {
//     sumOdd += i;
//   }
//   if (i % 3 == 0) {
//     sumOddMulti += i ** 2;
//   }
// }
// console.log("Sum :" + sum);
// console.log("Sum(Even) :" + sumEven);
// console.log("Sum(Odd) :" + sumOdd);
// console.log("Sum%2 - Sum%3 :" + (sumEvenMulti - sumOddMulti));

let sumallnumber = 0;
let sumeven = 0;
let sumodd = 0;
let sumsquareeven = 0;

for (let i = 1; i <= 100; i++) {
  sumallnumber = sumallnumber + i;

  if (i % 2 == 0) {
    sumeven = sumeven + i;
    sumsquareeven = (sumsquareeven + i) ** 2;
  } else {
    sumodd = sumodd + i;
  }
}
console.log(sumallnumber);
console.log(sumeven);
console.log(sumodd);
console.log(sumsquareeven);
