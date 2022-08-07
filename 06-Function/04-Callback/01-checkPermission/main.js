// ให้สร้างฟังก์ชัน checkPermission โดยมีพารามิเตอร์ 3 ตัว

// - ตัวแรกเป็น role
// - ตัวที่สองเป็นฟังก์ชันและทำงานเมื่อ role มีค่าเท่ากับ “ADMIN”
// - ตัวที่สามเป็นฟังก์ชันและทำงานเมื่อ role ไม่ใช่ “ADMIN”
// - ให้ลองเรียกใช้ฟังก์ชันโดย
// - ถ้า role เป็น “ADMIN” ให้ alert “ACCESS GRANTED”
// - ถ้า role ไม่ใช่ “ADMIN” ให้ alert “ACCESS DENIED”

// function checkpermission(role, admin, notadmin) {
//   if (confirm(role)) admin();
//   else notadmin();
// }
// function Ok() {
//   alert("ACCESS GRANTED.");
// }
// function Cancel() {
//   alert("ACCESS DENIED");
// }
// // functions showOk, showCancel are passed as arguments to ask
// checkpermission("are you admin?", Ok, Cancel);

function checkpermission(role, cb1, cb2) {
  if (role === "admin") {
    cb1();
  } else {
    cb2();
  }
}

// CallBack When Admin
let adMinExecute = function () {
  alert("ACCESS GRANTED");
};

// CallBack When Guest
let guestExecute = () => alert("ACCESS DENIED");

checkPermission("ADMININWZA", adMinExecute, guestExecute);
