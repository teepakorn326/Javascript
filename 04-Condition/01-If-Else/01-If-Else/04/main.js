// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
// - ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”
// - ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”
// - ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”
// - ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let input = prompt("Input number");

if (input == null && input.trim() == "" && input !== 0 && input > 0) {
  alert("Positive number");
} else if (input == null && input.trim() == "" && input !== 0 && input < 0) {
  alert("Negative number");
} else if (+input === 0) {
  alert("Zero");
} else {
  alert("Invalid number");
}
