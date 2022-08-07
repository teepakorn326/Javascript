// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
// คูณเฉพาะ value ที่เป็น number เท่านั้น

// ```js
// // before
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };

// // after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };
// ```

// INPUT : object
// OUTPUT : object

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = function (obj, num) {
  const result = {};

  for (let key in obj) {
    let currentvalue = obj[key];
    if (typeof currentvalue === "number") {
      result[key] = currentvalue * num;
    } else {
      result[key] = currentvalue;
    }
  }
  return result;
};

console.log(multiplyNumeric(menu, 3));
