// ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console

// ```
// *
// *	*
// *	*	*
// *	*	*	*
// ```

// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n

// let star = "";
// for (i = 1; i <= 4; i++) {
//   if (i == 1) {
//     star += "*\n";
//   }
//   if (i == 2) {
//     star += "* *\n";
//   }
//   if (i == 3) {
//     star += "* * * \n";
//   }
//   if (i == 4) {
//     star += "* * * *\n";
//   }
// }
// console.log(star);

// let result = "";
// for (let i = 0; i < 4; i++) {
//   result = result + "*";
//   console.log(result);
// }

let result = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    result = result + "*";
  }
  result = result + "\n";
}
console.log(result);
