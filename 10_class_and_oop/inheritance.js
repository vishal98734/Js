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
        // this.username = username;
        this.email = email;
        this.password = password;
    }

    addcourse(){
        console.log(`A new coures was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addcourse()

const masalaChai = new User("masalaChai")

//masalaChai.addcourse()
masalaChai.logMe()

console.log(chai instanceof Teacher);