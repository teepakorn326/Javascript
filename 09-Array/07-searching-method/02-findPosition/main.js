// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

// ```js
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// // expexted result: [0, 2, 4]
// ```

const alphabets = ["a", "b", "a", "c", "a", "d"];
// expexted result: [0, 2, 4]

// let result = [];

// for (let index in alphabets) {
//   if (alphabets[index] === "a") {
//     result.push(index);
//   }
// }
// console.log(result);

/**
 1 st search ==> found ==> know index
 .
 .
 .
 last search ==> found ==>index ==>-1
*/

let result = [];
let foundindex = alphabets.indexOf("a");

do {
  if (foundindex !== -1) {
    result.push(foundindex);
    foundindex = alphabets.indexOf("a", foundindex + 1);
  }
} while (foundindex !== -1);

console.log(result);
