// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

// ```js
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// ```

const arr = [2, 3, 5, 7, 11];

// arr.forEach((item, index, array) => {
//   console.log(item ** 2);
// });

function squareArr(arr) {
  const result = [];
  arr.forEach((item) => {
    let squarenum = item ** 2;
    result.push(squarenum);
  });
  return result;
}

console.log(squareArr(arr));
