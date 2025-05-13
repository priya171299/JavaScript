//singleton
//Object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "made eassy",
    "full name": "the made eassy",
     [mySym]:"myKey1",
     age: "25",
     location: "Jaipur",
     email: "madeeassy@gmail.com",
     isLoggedIn: false,
     lastLoginDAys: ["Monday", "Saturday"]
}

// console.log(JsUser.email);//madeeassy@gmail.com
// console.log(JsUser["email"]);//madeeassy@gmail.com
// console.log(JsUser["full name"]);//the made eassy
// console.log(JsUser[mySym]);//myKey1

JsUser.email = "madeeassychatgpt@gmail.com"
// console.log(JsUser.email);//madeeassychatgpt@gmail.com
// Object.freeze(JsUser)
JsUser.email = "madeeassygithub@gmail.com"
// console.log(JsUser.email);//madeeassychatgpt@gmail.com (due to freeze method applied on it)


JsUser.greeting = function(){
    console.log("Hello Js user");    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);    
}

// console.log(JsUser.greeting());//Hello Js user
// console.log(JsUser.greetingTwo());//Hello Js user, made eassy


//+++++++++++++++++++++ +++++++++++++++++++++ +++++++++++++++++++++


// const tinderUSer = new Object()
const tinderUser = {}

tinderUser.id = "123acs"
tinderUser.name = "saktiman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);//{ id: '123acs', name: 'saktiman', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "saktiman",
            lastname: "super hero"
        }
    }
}

// console.log(regularUser.fullname);//{ userfullname:  { firstname: 'saktiman', lastname: 'super hero' } }
// console.log(regularUser.fullname.userfullname);// { firstname: 'saktiman', lastname: 'super hero' }
// console.log(regularUser.fullname.userfullname.firstname);//saktiman

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {obj1, obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj5 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1, ...obj2}
// console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
]

// console.log(users[1].email);//abc@gmail.com

// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123acs', 'saktiman', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123acs' ], [ 'name', 'saktiman' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor);//hitesh

const {courseInstructor: instructor} = course
console.log(instructor);//hitesh



//JSON

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
    {},
    {},
]






