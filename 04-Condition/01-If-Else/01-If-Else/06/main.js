// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let input1 = prompt("Input first Number ");
let input2 = prompt("Input second Number ");

if (+input1 && +input2) {
  console.log(+input1 + +input2);
} else {
  alert("Invalid number");
}
