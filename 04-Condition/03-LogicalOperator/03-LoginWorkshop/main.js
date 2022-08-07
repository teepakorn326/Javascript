// - ให้ใช้คำสั่ง prompt ถามชื่อผู้ใช้ และให้รับค่าเก็บไว้ในตัวแปรชื่อ user
// - ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้กำหนด default value ของตัวแปร user เป็น guest
// - ถ้าผู้ใช้กรอกชื่อผู้ใช้ว่า “codecamp” ให้ใช้คำสั่ง prompt เพื่อถาม password
// - ถ้าผู้ใช้กรอก password เป็น “123456” ให้ตัวแปร user มีค่าเท่ากับ codecamp
// - ถ้าผู้ใช้กรอก password ไม่ใช่ “123456” ให้ alert “Wrong password”
// - ถ้าผู้ใช้กรอกชื่อผู้ใช้อย่างอื่นที่ไม่ใช่ “codecamp” ให้ user มีค่าเป็น guest”
// - ให้ใช้คำสั่ง alert เพื่อแสดงข้อความ “Welcome” ตามด้วยค่าในตัวแปร user

let user = prompt("Input username");

if (user == null || user.trim() == "" || user !== "codecamp") {
  let user = "Guest";
} else if ((user = "codecamp")) {
  let password = prompt("Enter password");

  if (+password === 123456) {
    let user = "codecamp";
  } else {
    alert("Wrong password");
  }
} else if (user !== "codecamp") {
}
