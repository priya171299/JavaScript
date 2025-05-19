const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        // console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    // console.log("promise consumed");    
})

new Promise (function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    // console.log("Async 2 resolved");
})

const preomiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "example@gmail.com"})
    }, 1000)
})

preomiseThree.then(function(user){
    // console.log(user);//{ username: 'chai', email: 'example@gmail.com' }
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({ username: 'chai', email: 'example@gmail.com' })
        }else {
            reject("Something went wrong" );            
        }
    }, 1000)
})

promiseFour.then(function(user){
    // console.log(user);
    return user.username    
}).then(function(username){
    // console.log(username);    
}).catch(function(error){
    // console.log(error);    
}).finally(()=>{
    // console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({ username: 'javaScript', email: 'example@gmail.com' })
        }else {
            reject("JavaScript Error")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        // console.log(response);
        
    } catch (error) {
        // console.log(error);
        
    }
}
consumePromiseFive()

//++++++++++++++++++++++++ Introduction about Fetch ++++++++++++++++++++++++


async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
        
    }catch(error){
        console.log("E :", error);
        
    }
}

// getAllUsers()

fetch("https://api.github.com/users/priya171299")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    // console.log(data);
    
})
.catch((error)=>{
    // console.log(error);
    
})



const promise1 = Promise.resolve(3);
const promise2 = 34;
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "promise", email: "this@gmail.com"})
        }else {
            reject("Something went wrong");
        }
    })
})

Promise.all([promise1, promise2, promise3])
.then((value)=>{
    console.log(value);  //[ 3, 34, { username: 'promise', email: 'this@gmail.com' } ] 
    
}).catch((error)=>{
    console.log(error);
    
})