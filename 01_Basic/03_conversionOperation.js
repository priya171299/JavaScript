let score = 33;
console.log(typeof(score));//output : number
score = "33";
console.log(typeof(score));//output : string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//output : number
console.log(valueInNumber);//output : number

score = "33acs";
valueInNumber = Number(score)
console.log(typeof valueInNumber);//output : number
console.log(valueInNumber);//output : NaN


score = null;
valueInNumber = Number(score)
console.log(typeof valueInNumber);//output : number
console.log(valueInNumber);//output : 0

score = undefined;
valueInNumber = Number(score)
console.log(typeof valueInNumber);//output : number
console.log(valueInNumber);//output : NaN

//converting to Number
// "33" -- 33
// "33acs" -- NaN
// true -- 1; false -- 0

//converting to Boolean
//1=> true; 0=> false
//""=> false
//"avdc" => true