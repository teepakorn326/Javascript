// - จงรวม nums1 และ num2 เข้าด้วยกัน
// - จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม -6, -1 เข้าไประหว่าง nums1 กับ nums2
// - หาผลรวมของทุก element ใน Array ที่ได้

// ```js
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// ```

const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const num3 = [5, ...nums1, -6, -1, ...nums2]; //?

const sumnum = num3.reduce((acc, item) => acc + item, 0); //?
