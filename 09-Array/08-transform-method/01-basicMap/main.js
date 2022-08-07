// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)


const arrayInt = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const resultInt = arrayInt.map(function(item,index,arr)) {
    return item*2
}
console.log(resultInt)
const arrayNum = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const resultNum = arrayNum.map(function(item,index,arr)){
    return  String(item)
}
console.log(resultNum)
const arrayStr = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const resultStr = arrayStr.map(function(item,index,arr)){
    return  typeof(item)
}
console.log(resultStr)

const arrayfruits = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const resultFruits = arrayfruits.map(function(item,index,arr)){
    return  item.toUpperCase()
}
console.log(resultFruits)

const arrayOdd = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const resultOdd = arrayOdd.map(function(item,index,arr)){
    if(item%2 === 0){
        item ="odd"
    }else{
        item = "even"
    }return resultOdd
}
console.log(resultOdd)

const arrayMinus = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const resultMinus = arrayMinus.map(function(item,index,arr)){
    return Math.abs(item)
}
console.log(resultMinus)

const arrayInt2 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const resultNum = arrayNum.map(function(item,index,arr)){
    return  String(toFixed(item,2))
}
console.log(resultNum)

const MONTH = ['Jan',"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const array = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]


const array = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]

const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const arrayoffruit = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const resultoffruit = arrayoffruit.map(item => {
    let currentObj = {...item}
    let age = CURRENT_YEAR -  item.birth.slice(0,4)
    return {...item,age:age} 
})

const arrayfruitsbirth = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const display = array.map(function(item,index,arr){
    let name = item.name
    let date = item.birth.slice(-2)
    let month = item.birth.slice(5,7)
    let monthname = MONTH(month-1).toLowerCase()
    let year = item.birth.slice(0,4) 
})

