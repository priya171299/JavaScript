let score = 33;
// console.log(typeof(score));//output : number
score = "33";
// console.log(typeof(score));//output : string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);//output : number
// console.log(valueInNumber);//output : number

score = "33acs";
valueInNumber = Number(score)
// console.log(typeof valueInNumber);//output : number
// console.log(valueInNumber);//output : NaN


score = null;
valueInNumber = Number(score)
// console.log(typeof valueInNumber);//output : number
// console.log(valueInNumber);//output : 0

score = undefined;
valueInNumber = Number(score)
// console.log(typeof valueInNumber);//output : number
// console.log(valueInNumber);//output : NaN

//converting to Number
// "33" -- 33
// "33acs" -- NaN
// true -- 1; false -- 0

//converting to Boolean
//1=> true; 0=> false
//""=> false
//"avdc" => true

//****************** Operation ******************

let value = 3;
let negValue = -value;
// console.log(negValue);// o/p : -3

// console.log(2+2);// o/p : 4
// console.log(2-2);// o/p : 0
// console.log(2*2);// o/p : 4
// console.log(2**2);// o/p : 4
// console.log(2/2);// o/p : 1
// console.log(2%2);// o/p : 0

let str1 = "hello"
let str2 = " JS"
let str3 = str1 + str2;
// console.log(str3);//o/p : hello JS

// console.log("1"+2);//o/p : 12
// console.log(1+"2");//o/p : 12
// console.log("2"+1+2);//o/p : 212
// console.log(1+2+"2");//o/p : 32

// console.log(+true);//o/p : 1
// console.log(+false);//o/p : 0


// console.log(+""); //o/p : 0

let gameCounter = 100;
// console.log(gameCounter++);//o/p : 100
// console.log(++gameCounter);//o/p : 101

// console.log(null > 0);//o/p : false
// console.log(null == 0);//o/p : false
// console.log(null >= 0);//o/p : true

// console.log(undefined > 0);//o/p : false
// console.log(undefined == 0);//o/p : false
// console.log(undefined >= 0);//o/p : false







