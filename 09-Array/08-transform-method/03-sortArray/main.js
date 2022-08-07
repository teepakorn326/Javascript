// จงเรียงข้อมูลใน arr จากมากไปหาน้อย

// ```js
// const arr = [11, 17, 23, 13, 7, 19];
// ```

const arr = [11, 17, 23, 13, 7, 19];
function compareFn(a, b) {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
}
arr.sort(compareFn);
