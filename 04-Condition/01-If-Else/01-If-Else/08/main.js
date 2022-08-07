// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let score = prompt("input score for grading");

if (+score >= 80) {
  alert("Got an A");
} else if (+score >= 70 && +score < 80) {
  alert("Got an B");
} else if (+score >= 60 && +score < 70) {
  alert("Got an C");
} else if (+score >= 50 && +score < 60) {
  alert("Got an D");
} else {
  alert("Got an Fuck");
}
