// จงหา unique array element ของ alphabets

// ```js
// let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// // expected result: ['a', 'b', 'c', 'e', 'd']
// ```

let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// expected result: ['a', 'b', 'c', 'e', 'd']
/*
IF found character in arr first time
    PUSH
ELSE 
    Don't PUSH
 */
const result = alphabets.reduce((acc, char) => {
  if (!acc.includes(char)) {
    acc.push(char);
  }
  return acc;
}, []);
console.log(result);
