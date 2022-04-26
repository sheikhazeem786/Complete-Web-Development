// let obj={
//     name:"Sheikh",
//     state:"Istanbul",
//     pin:271801
// }

// let {state,name,pin}=obj

// console.log(name,state,pin)


let obj={
    name:'azeem',
    address:{
        country:'India',
        state:{
            statename:'UP',
            pincode:271801
        }
    }
}

let {name}=obj
let {address:{country:c, state:{statename}}}=obj
// let {address:{state:{statename}}}=obj

console.log(name)
console.log(c)
console.log(statename)
