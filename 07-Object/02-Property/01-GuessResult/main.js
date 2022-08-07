// รรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const user = {
  email: "cc@gmail.com",
  isActive: true,
};

// user.isActive = false;
// console.log(user); // * แสดง email: "cc@gmail.com", และ isActive: false,
user = {};
console.log(user); // **
