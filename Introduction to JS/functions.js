//Non-primitives => array, objects, function

// function def
function sayHi(param) {
    // console.log("Hello from sayHi");
    // console.log("Param recieves ", param);
    let retVal = Math.random() > 0.5 ? true : "It is lesser";
    return retVal;
}

// function call
// sayHi(10);
// sayHi("Hello");
let retval = sayHi([1, 2, 3, 4, 5]);
console.log("retVal", retval);