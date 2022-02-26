// // print
// console.log("Hello JS:)");
// //declare variable
// let a;
// // by default: undefined
// a = 10;
// a = 10.1;
// a = "Hello i am String";
// a = "Hello i am also String";
// a = null;
// console.log("variable contains", a);
// a = true;
// variable types : Primitive types, number,string, boolean, null, symbol;
// JS->java,C,C++

// // print till n
// let number = 10;
// for (let i = 1; i < number; i++) {
//     console.log("Number is ", i);
// }

// isPrime
let number = 23;
let flag = true;
for (let div = 2; div < number; div++) {
    if (number % div == 0) {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log(number, " is Prime");
} else {
    console.log(number, "is not prime");
}