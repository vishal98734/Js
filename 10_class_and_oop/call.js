function Setusername(username) {
    this.username = username
}

function createrUser(username, email, password){
    Setusername.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createrUser("chai", "chai@fb.com","123")
console.log(chai);