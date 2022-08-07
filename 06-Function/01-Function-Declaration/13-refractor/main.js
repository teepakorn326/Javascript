// - ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
// - ใช้ if แต่ห้ามใช้ else
// - ใช้ ? แทน if
// - ใช้ || แทน if

// ```js
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }
// ```

function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm("Did parents allow you?");
  // }
  // #1
  if (age > 18) {
    return true;
  }
  return confirm("Did parent allow you?");
  // #2
  age > 18 ? true : confirm("Did parent allow you?");
  // #3
}
