// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

// ```js
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// ```
const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function updateTask(id, newName) {
  const newTask = tasks.slice(0);
  let foundindex = newTask.findIndex((item) => (item.id = id));
  if (foundindex !== -1) {
    newTask.splice(foundindex, 1, { id: id, name: newName });
  }
  return newTask;
}
const newTodos = updateTask(2, "Football");
console.log(newTodos);
