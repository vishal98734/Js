const user = {
    username: "vishal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`)
        //console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "akki"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "vishal"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "vishal"
//     console.log(this.username);
// }

const chai = () => {
    let username = "vishal"
    console.log(this.username);
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num1


//const addTwo = (num1, num2) =>  num1 + num1

//const addTwo = (num1, num2) =>  (num1 + num1)
const addTwo = (num1, num2) =>  ({username: "vishal"})

console.log(addTwo(3, 4));