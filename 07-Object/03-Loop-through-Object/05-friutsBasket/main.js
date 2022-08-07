// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

function fruitbasket() {
  const result = {};
  let key;
  let value;
  do {
    key = prompt("Enter key");
    value = prompt("Enter value");
    if (key !== null && key.trim !== "" && value > 1) {
      result[key + "s"] = value;
    } else {
      result[key] = value;
    }
  } while (key !== "stop" && value !== "stop");

  return result;
}

let usercreateobject = fruitbasket();

console.log(usercreateobject);
