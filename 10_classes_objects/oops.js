const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);//Username: hitesh
        // console.log(this);
        /*
        {
          username: 'hitesh',
          loginCount: 8,
          signedIn: true,
          getUserDetails: [Function: getUserDetails]
        }
*/
    }

}
// console.log(user);
/*
{
  username: 'hitesh',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
*/

// console.log(user.username);//hitesh

// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this;
}


const userOne =new User("someone", 23, true)
const userTwo =new User("Anyone", 32, false)
// console.log(userOne.constructor("someone", 23, true));
console.log(userTwo);



