- ให้สร้างฟังก์ชันเช็คตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่
- ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข และแสดงตัวเลขจำนวนเฉพาะทั้งหมดตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

function checkprime(num);
isprime = true;

function isprime(num) {
for (let i = 2; i < num; i++) {
if (num % 1 == 0) {
isprime = false;
break;
}
}
return isprime;
}
console.log(checkprime(7));

function printprime(limit){
for(let i = 2 ; i<= limit ; i++){
let isprime = checkprime(i)
}
}
