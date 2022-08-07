const set = new Set([5, 7, 7, 5, 6]);
console.log(set); //?
console.log([...set]); //?

const arr = [3, 7, 2];
const clone = [...arr]; //?

const a = [4, 5];
const b = [2, 7];

const c = [...a, ...b]; //?
const d = [...a, 0, ...b]; //?

const product = { name: "Pepsi", price: 20 };

// const clone1 = {...product}
// console.log(clone1) //?

const description = { description: "Pepsi is the best", price: 30 };
Object.assign(product, description); //?
Object.assign(description, product); //?
