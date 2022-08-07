// จงหาค่ามากสุดและน้อยสุดใน arr

// ```js
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// ```

let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const initailValue = {
    max : arr[0]
    min : arr[0]

}
let summary = arr.reduce((a,c) => {
    if(a.max < item){
        a.max = item
    }
    if(a.min > item ){
        a.max = item
    }
    return a
},initailValue)