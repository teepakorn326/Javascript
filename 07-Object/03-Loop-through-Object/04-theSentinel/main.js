// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

function createobjectfromuserinput() {
  const result = {};
  let key;
  let value;
  do {
    key = prompt("Enter key");
    value = prompt("Enter value");
    if (key !== null && key.trim !== "") {
      result[key] = value;
    }
  } while (key !== "stop" && value !== "stop");

  return result;
}

let usercreateobject = createobjectfromuserinput();

console.log(usercreateobject);
