// ให้สร้างตัวแปร Array ที่เกิดจากการนำค่า element ใน a และ b มาต่อกัน

// ```js
// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];
// ```

const a = [1, 5, 7, 11];
const b = [2, 3, 6];

let result = a.concat(b);

console.log(result);

const res = [...a, ...b];
console.log(res);
