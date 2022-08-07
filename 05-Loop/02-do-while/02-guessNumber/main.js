// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

if (+answer < 1 || +answer > 99) {
  alert("Invalid Range");
} else {
  //player 2
  let count = 0;
  do {
    guess = prompt("Player B : Enter Number");
    count++;
    if (guess == answer) {
      alert("Correct");
      alert(count);
    } else if (+guess < +answer && +guess > 0) {
      alert("Less than");
    } else if (+guess > +answer) {
      alert("More than");
    } else {
      alert("Please input number between 1-99");
    }
  } while (guess !== answer);
}
