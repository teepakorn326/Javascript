// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9
// ```

function max(a, b, c, d) {
  if (a === undefined) {
    return undefined;
  }
  if (b === undefined) {
    return a;
  }
  if (c === undefined) {
    return a > b ? a : b;
  }
  if (d === undefined) {
    return Math.max(a, b, c);
  }
}
