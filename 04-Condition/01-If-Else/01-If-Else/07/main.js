// - จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
// - หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
// - หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
// - หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”

let user = prompt("Input username");
let pass = prompt("Input password");

if (user == null || user.trim() == "") {
  alert("username is required");
} else if (pass == null || pass.trim() == "") {
  alert("password is required");
} else if (user.trim() == "admin" && pass.trim() == "1234") {
  alert("Hello  " + user);
} else if (user.trim() == "john" && pass.trim() == "qwerty") {
  alert("Hello  " + user);
} else {
  alert("invalid username or password");
}
