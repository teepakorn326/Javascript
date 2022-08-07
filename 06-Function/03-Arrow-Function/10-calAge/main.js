// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

let leapyear = (year) => {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
  return year % 4 == 0;
};

let caldayfrombirthyear = (birthyear) => {
  let day = 0;
  for (let i = birthyear; i <= 2020; i++) {
    if (leapyear(i)) {
      day += 366;
    } else {
      day += 365;
    }
  }
  return day;
};

console.log(caldayfrombirthyear(2020));
