// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator

function profile(name, lastname, ...hobbies) {
  return {
    name: name,
    lastname,
    hobbies,
    numHobbies: hobbies.length,
  };
}
console.log(profile("tee", "wong", "run", "gun", "fun", "mun")); //?
