// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

// ```js
// let john = { name: 'John', age: 27 };
// let jo = { name: 'Jo', age: 21 };
// let jin = { name: 'Jin', age: 25 };

// let arr = [john, pete, mary];

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
// ```

let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  let average = arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
  return average;
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
