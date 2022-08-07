// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

function Shoppingcart() {
  const result = {};
  let key;
  let nameValue = prompt("Inut Product Number");
  let salesValue = prompt("Inut Sales Number");
  let priceValue = prompt("Inut Price");
  let dealsValue = prompt("Inut Deals (%)");

  while (
    nameValue !== null &&
    nameValue?.trim() !== "" &&
    salesValue !== null &&
    salesValue?.trim() !== "" &&
    priceValue !== null &&
    priceValue?.trim() !== "" &&
    dealsValue !== null
  ) {
    if (dealsValue === 0 && dealsValue?.trim() !== "") {
      result[nameValue] = salesValue * priceValue;
    } else {
      result[nameValue] = salesValue * priceValue * ((100 - dealsValue) / 100);
    }
    break;
  }
  return result;
}
let cart = Shoppingcart();
console.log(cart);
