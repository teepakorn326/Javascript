// ให้สร้าง object ชื่อ user
// - เพิ่ม property ชื่อ name ให้มีค่าเท่ากับ John
// - เพิ่ม property ชื่อ surname ให้มีค่าเท่ากับ Doe
// - Update property name ให้มีค่าเป็น Matt
// - ลบ property name

const user = {};

user.name = "John";
console.log(user);
user.name = "MAtt";
console.log(user);
user.surname = "Doe";
console.log(user);
delete user.name;
console.log(user);
