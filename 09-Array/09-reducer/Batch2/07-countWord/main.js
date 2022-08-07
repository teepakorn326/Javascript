// จงนับชื่อที่ปรากฏใน names

// ```js
// let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// // expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

// ```

/* INPUT : ARRAY
    OUTPUT : Object
*/

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
let result = names.reduce(function (acc, item, index, arr) {
  // do logic
  // IF current name already exit add value + 1
  // else add new Property and SET value = 1
  // ADD Property to Object
  let currentkey = acc[item];
  if (!currentkey) {
    acc[item] = 1;
  } else {
    acc[item] = acc[item] + 1;
  }

  return acc;
}, {});
console.log(result);
