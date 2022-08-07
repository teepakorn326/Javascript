// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

// INPUT : Object ที่ใช้ตรวจสอบ
// OUTPUT : true == Object ว่าง ไม่มี key , false == Object มีอย่างน้อย 1 key

function isemptyobject(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const user1 = { name: "CC12" };
const user2 = { name: "Codecamp", cohort: 12 };
const user3 = {};

console.log(isemptyobject(user1));
console.log(isemptyobject(user2));
console.log(isemptyobject(user3));
console.log(isemptyobject({ name: "Codecamp", cohort: 12 })); // decraie ดื้อๆเลย
