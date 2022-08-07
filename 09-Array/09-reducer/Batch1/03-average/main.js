// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

// ```js
// const scores = [
//   { score: 90, subject: 'HTML', weight: 0.2 },
//   { score: 95, subject: 'CSS', weight: 0.3 },
//   { score: 85, subject: 'JavaScript', weight: 0.5 }
// ];
// // expected result: 89
// ```

const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

function grading(scores) {
  let result =
    scores.reduce((a, c) => {
      return a + c.score * c.weight;
    }, 0) /
    scores.reduce((a, c) => {
      return a + c.weight;
    }, 0);
  return result;
}
console.log(grading(scores));
