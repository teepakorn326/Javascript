// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// const sumUnlimitParams = (...numbers) => {
//     console.log(numbers);
//     return numbers.reduce((acc, item) => acc + item, 0);
//   };
//   sumUnlimitParams(2, 5, 7, 8); //?

const multiplyNumber = (...nums) => {
  return nums.reduce((acc, item) => acc * item, 1);
};
multiplyNumber(2, 5, 6, 7); //?
