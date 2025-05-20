class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New course added by ${this.username}`);
        
    }
}
const chai = new Teacher("chai", "chai@.com", "123");
console.log(chai.addCourse());
chai.logMe();

const masalatea = new User("masalatea");
masalatea.logMe();
console.log(masalatea instanceof Teacher);//false



