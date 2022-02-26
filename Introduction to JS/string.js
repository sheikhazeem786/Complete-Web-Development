let singleQuotes = '      Single quotes ki string   ';
let doubleQuotes = "Double quotes ki string";
console.log(singleQuotes);
console.log(doubleQuotes);

// let char = singleQuotes.charAt(2);
// let ascii = singleQuotes.charCodeAt(2);
// let subString = singleQuotes.substring(2, 8);
// console.log(char);
// console.log(subString);
// console.log(ascii);
singleQuotes = singleQuotes.trim();
let arrStr = singleQuotes.split(" ");
console.log(arrStr);
let str = arrStr.join("+")
console.log(str);