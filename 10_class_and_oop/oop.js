const user = {
    username: "akki",
    loginCount: 8,
    signdIn: 8,

    getUserDetail: function () {
        //console.log("got user datails from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "akki",
    loginCount: 8,
    signdIn: 8,

    getUserDetail: function () {
        //console.log("got user datails from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetail());
//console.log(this);

// const promiseOne = new Promise()
// const data = new Date()

function User(username, loginCount, isloggedIn) {
    this.username = username
    this.loginCount = loginCount

    return this
}

const userOne = new User("akki", 12, true)
const userTwo = new User("chai", 12, true)
console.log(userOne);
console.log(userTwo);