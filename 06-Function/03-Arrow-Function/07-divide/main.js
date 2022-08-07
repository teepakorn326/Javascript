// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

const num = (number) => {
  if (number % 7 == 0) {
    number = true;
  } else {
    number = false;
  }
  return number;
};
console.log(num(9)); //?
