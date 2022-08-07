// ให้เขียนฟังก์ชันคำนวณค่า factorial

const calfact = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};
console.log(calfact(5));
