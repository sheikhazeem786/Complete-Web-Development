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

// shallow copy using spread operator
// let obj2={...obj, address:{ ...obj.address}, state:{...obj.address.state}}

// deep copy using JSON
let obj2=JSON.parse(JSON.stringify(obj))  

obj.name='Sheikh'
obj.address.country='Turkey'
obj.address.state.statename='Istanbul'


console.log(obj)
console.log(obj2)