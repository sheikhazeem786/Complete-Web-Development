// arr declare
// let arr=[];
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// console.log(arr.length);
// let i = 0;
// while (i < arr.length) {
//     console.log("elem at idx", i, "is", arr[i]);
//     i++;
// }

// push, unshift
// you can push multiple type of value
// arr.push("last value");
// arr.unshift("first value");
console.log(":~-------------------------~:");
// console.log(arr);

// pop, shift
// arr.pop();
// arr.shift();
console.log(":~-------------------------~:");
// console.log(arr);

// splice, slice
// slice -> start idx, ending idx-1
// let partOfAnArray = arr.slice(2, 4);
// console.log(partOfAnArray);
// console.log(arr);
// let partOfAnArray2 = arr.slice(2);
// console.log(partOfAnArray2);

// splice -> idx,no. of elm to remove
// it updates the origial array
let spliceArr = arr.splice(2, 3);
console.log(spliceArr);
console.log(arr);

// index of, contain