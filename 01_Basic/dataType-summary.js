//https:262.ecma-international.org/5.1/#sec-11.4.3
//Javascript is dynamically defined language

//primitive datatype

//7 type : String, Number, Boolean, null, undefined, BigInt, Symbol

//Reference Type {Non primitive}
// Array, Ojects, Functions


let big = 32423553456546n;
// console.log(typeof big);//o/p : bigint

let heros = ["saktiman", "krish"];
// console.log(typeof heros);//o/p : object

let myObj =  {
   1: "undefined", 2:"boolean", 
}
// console.log(typeof myObj);//o/p : object

let myFun = ()=>{
    console.log("Write anything");
    
}
// console.log(typeof myFun);//o/p: function

let id = Symbol("123")
let anotherId = Symbol("123");
// console.log(id === anotherId);//o/p : false




//***************** Stack and Heap *****************


//concept of stack (In stack you will get a copy)
let id1 = "abcd123";
let anotherId1 = id1;
console.log(anotherId1);//o/p : abcd123

anotherId1 = "pqrs123";
console.log(anotherId1);//o/p : pqrs123
console.log(id1);//o/p : abcd123

//concept of heap (In heap you just get reference of the variable)
let user = {
    email:"abcd@gmail.com",
    upi:"abcd"
}
let user2 = user
user2.email = "pqrs@gmail.com"
user2.upi = "pqrs"

console.log(user);//o/p : { email: 'pqrs@gmail.com', upi: 'pqrs' }
console.log(user2);//o/p : { email: 'pqrs@gmail.com', upi: 'pqrs' }










