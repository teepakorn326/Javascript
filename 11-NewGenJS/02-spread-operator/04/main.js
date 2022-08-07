// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// ```js
// doubleAndReturnArgs([1, 2, 3], 4, 4); 
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4); 
// // expexted result: [2, 20, 8]

// ```
function doubleAndReturnArgs(arr,...numbers){
    arr.reduce(  (resultArr, cur) => ,)
}



// doubleAndReturnArgs([1, 2, 3], 4, 4); 
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4); 
// // expexted result: [2, 20, 8]

// const doubleAndReturnArgs = (...arr) =>
//   arr.reduce(
//     (resultArr, cur) =>
//       Array.isArray(cur) ? [...resultArr, ...cur] : [...resultArr, cur * 2],
//     []
//   );

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));