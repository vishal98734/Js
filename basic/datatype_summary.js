// Primtive

// 7 types : String, Number, Boolearn, undefined, symbol, BigInt

const score = 100
const scoreValue = 100

const isloggedIn = 100.3
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

// const bigNumber = 253654266525n
// Reference (Non Primtive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name: "vishal",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof outsideTemp);
  

//*********************************************************

// Stack (Primitve), Heap (Non-Primitive)

let myName = "vishal"

let anothername = myName
anothername = "akki"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "akki@blinkit.com"

console.log(userOne.email);
console.log(userTwo.email);