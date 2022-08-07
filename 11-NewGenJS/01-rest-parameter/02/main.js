// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

function filterOutOdds(...nums) {
  return nums.reduce(function (acc, item) {
    if (item % 2 == 0) {
      acc.push(item);
    }
    return acc;
  }, []);
}

filterOutOdds(2, 5, 6, 3, 8); //?
