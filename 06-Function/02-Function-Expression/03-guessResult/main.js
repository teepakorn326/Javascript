function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // * function//?
console.log(answer(1337)); // ** 56154 //?
console.log(magic(1337)(42)); // *** ไม่รับ 1337 เพราะ function ข้างบนไม่ได้ใส่ไว้ //?
