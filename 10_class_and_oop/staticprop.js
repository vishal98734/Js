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

const akki = new User ("akki")
//console.log(akki.createId());

class teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
} 

const iphone = new teacher("teacher","i@phone")
console.log(iphone.createId());