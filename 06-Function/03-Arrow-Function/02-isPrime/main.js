// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function
// for (let i = 2; i <= 100; i++) {
//     let isprimr = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         isprimr = false;
//         break;
//       }
//     }
//     if (isprimr) {
//       console.log(i);
//     }

const checkprime = (num) => {
  let isprime = true;
  for (let i = 2; i < num; i++) {
    if (num % 1 == 0) isprime = false;
    break;
  }
  return (isprime = true);
};
console.log(checkprime(9));
console.log(checkprime(2));
console.log(checkprime(7));
