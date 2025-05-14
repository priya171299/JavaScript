function sayMYName(){
    console.log("m");
    console.log("a");
    console.log("d");
    console.log("e");
    
}

// sayMYName()

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("result ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter Your Name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sam"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(300,200,3434,3422,34234));//[ 3434, 3422, 34234 ]

const user = {
    username : "The made eassy",
    prices: 399,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
    
}

handleObject(user); //Username is made eassy and price is 199

handleObject({
    username : " made eassy",
    prices: 199,
})//Username is The made eassy and price is 399

const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));//300
console.log(returnSecondValue([200, 300, 400]));//300

