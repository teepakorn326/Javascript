// - จงเขียนฟังก์ชัน extractCurrencyValue(string, rate) ในการแปลงค่า string ที่อยู่ในรูปแบบสกุลเงินดอลลาร์ ให้อยู่ในรูปแบบสกุลเงินบาท
// - rate คือ อัตราในการแปลงดอลลาร์ให้เป็นบาท
// - ตัวอย่าง ผลลัพธ์ของฟังก์ชัน

// ```js
// extractCurrencyValue('$120', 30); // THB3600
// ```

function extractCurrencyValue(string, rate) {
  let converted = +string.slice(1) * rate;

  return "THB" + converted;
}

console.log(extractCurrencyValue($120));
