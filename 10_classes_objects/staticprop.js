class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const myName = new User("yourName")
// console.log(myName.createId());//error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const vagnar = new Teacher("vagnar", "vag@navigator.com")
// console.log(vagnar.createId());//error

console.log(User.createId());//123 , static method and varibles are accessed by class name



