let str = "my_string";
let str1 = "my first ";
// console.log(str1 + str);

const gameName = new String("It's-good-to-hear");

// new String("a") == "a" and "a" == new String("a")are both true
// new String("a") == new String("a") is false.

// console.log(gameName[0]);//o/p : I

// console.log(gameName.__proto__);//o/p : {}

// console.log(gameName.length);//o/p : 17
// console.log(gameName.toUpperCase());//o/p : IT'S GOOD TO HEAR
// console.log(gameName.charAt(3));//o/p : s
// console.log(gameName.indexOf('g'));//o/p : 5

const newString = gameName.substring(0,4)
// console.log(newString);//o/p : It's

const anotherString = gameName.slice(0, 4)
// console.log(anotherString);//o/p : It's
const newStringOne = "   sink   ";
// console.log(newStringOne);//o/p : start   sink   end
// console.log(newStringOne.trim());//o/p: sink

const url = "http://xyz.com/xyz%20pqrs"
// console.log(url.replace('%20', '-'));//o/p : http://xyz.com/xyz-pqrs
// console.log(url.includes("pqrs"));//o/p: true
console.log(gameName.split('-'));//o/p: [ "It's", 'good', 'to', 'hear' ]
