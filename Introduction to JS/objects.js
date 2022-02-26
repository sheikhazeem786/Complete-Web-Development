// Object-> group of key : value pair
// key : value -> property
// key : function -> method
let cap = {
    name: "Steve",
    lastName: "Rogers",
    address: {
        city: "Manhattan",
        state: "New York"
    },
    age: 35,
    isAvenger: true,
    movies: ["first Avenger", "winter soldier", "civil war"],
    sayHi: function() {
        console.log("Cap says Hi");
    }



};
//GET
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();

// SEET/UPDATE
// console.log("cap : ", cap);
// cap.age = 36;
// cap.isAvenger = false;
// cap.friends = ["Tony", "Bruce", "Peter"];
// console.log("------------------");
// console.log("cap : ", cap);

// DELETE
// delete cap.address;
// console.log("cap : ", cap);

// ways to get key part.1
// for (let key in cap) {
//     console.log(key, " : ", cap[key]);
// }

// ways to get key part.2
// let propKey = "age";
// console.log(cap[propKey]);
// console.log(cap.age);
// console.log(cap["age"]);

// if key not prersent, undefined is shown
// console.log(cap.xyz);