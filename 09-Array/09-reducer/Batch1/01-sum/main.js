// จงหาผลคูณของ element ใน nums

// ```js
// const nums = [-3, 2, 11, -7, 4, 6];
// ```

const nums = [-3, 2, 11, -7, 4, 6];
let result = nums.reduce((sum, current) => sum * current, 1);
console.log(result);
