const descipter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descipter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "yourName",
    price: 150,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nahi bni");        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

chai.name = "myName"

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){        
        console.log(`${key} : ${value}`);
    }
    
}