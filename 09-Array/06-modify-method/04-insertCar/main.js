// ให้เพิ่ม mazda bmw และ nissan เข้าไปใน cars โดยให้อยู่ข้างหลัง honda

// ```js
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// ```

const cars = ["volvo", "toyota", "honda", "ford"];

let res = cars.splice(3, 0, "mazda", "bmw", "nissan");

console.log(cars);
console.log(res);
