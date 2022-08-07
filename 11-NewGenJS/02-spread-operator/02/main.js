// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

const array1 = [1, -2, 3, 4];
function newArr(arr) {
  let clone = [...arr];
  clone[3] = arr[3] ** 2;
  return clone;
}
console.log(newArr(array1)); //?
console.log(array1); //?
