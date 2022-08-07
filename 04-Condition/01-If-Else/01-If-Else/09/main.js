// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

let num1 = prompt("Input first number");
let num2 = prompt("Input second number");
let num3 = prompt("Input third number");

if (+num1 > +num2 && +num2 > +num3) {
  alert(num1 + "," + num2 + "," + num3);
} else if (+num1 > +num3 && +num3 > +num2) {
  alert(num1 + "," + num3 + "," + num2);
} else if (+num3 > +num2 && +num2 > +num1) {
  alert(num3 + "," + num2 + "," + num1);
} else if (+num3 > +num1 && +num1 > +num2) {
  alert(num3 + "," + num1 + "," + num2);
} else if (+num2 > +num1 && +num1 > +num3) {
  alert(num2 + "," + num1 + "," + num3);
} else if (+num2 > +num3 && +num3 > +num1) {
  alert(num2 + "," + num1 + "," + num3);
} else {
  alert("put number again");
}
