// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")

// console.log(chai.encryPassword());
// console.log(chai.changeUsername());

// Behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


User.prototype.encryPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new User("tea","chai@gmail.com","123")

console.log(tea.encryPassword());
console.log(tea.changeUsername());

