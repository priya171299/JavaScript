let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// heroPower.heyHitesh()//error
// myHeros.heyHitesh()

//Instance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// console.log(Teacher);

Teacher.__proto__ = User;
// console.log(Teacher.__proto__.name);//chai

//modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(Object.setPrototypeOf(Teacher, TeachingSupport));


let anotherUsername = "someone    "

String.prototype.trueLength = function(){
    console.log(`${this}`);   
    console.log(`True length is : ${this.trim().length}`);     
}

anotherUsername.trueLength()
"say hello".trueLength()
