// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

function login(username, password) {
  if ((username = "admin" && password == "P@ssword")) {
    return alert("Login Complete");
  } else {
    return alert("Login failed");
  }
}
let username = prompt("Enter Username");
let password = prompt("Enter Password");

login(username, password);
