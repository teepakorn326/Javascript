// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator() {
  this.num1 = 0;
  this.num2 = 0;

  this.read = function () {
    this.num1 = +prompt("input first Number");
    this.num2 = +prompt("input second Number");
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
}
let cal1 = new Calculator();

console.log(cal1.read());
console.log(cal1.sum());
console.log(cal1.mul());
