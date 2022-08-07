// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

const calpoint = (win, draw, lose) => 3 * win + draw + 0 * lose;
console.log(calpoint(5, 2, 2));
