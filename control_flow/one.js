// if

//   < less then
//   > greater then
//   <= less then equal
//   >= greater then equal
//   == for checking equal
//   != not equal
//   === Strict equality for checking data  type
//   !==



const isUserloggedIn = true
const temperture = 41
if (temperture === 40) {
   console.log("less than 50");
} else {
   console.log("temperture is greater then 50");
} 
//console.log("execute");   

// const score = 200
// if (score > 100){
//    const power = "fly"
//    console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const bal = 1000
// if (bal > 500) console.log("test");

// if (bal < 500) {
//    console.log("less then 500 ");
// } else if (bal < 750){
//    console.log("less then 750");
// } else if (bal < 900){
//    console.log("less then 750");
// } else{
//    console.log("less then 1200");
// }

const UserloggedIn = true
const debitCard = true
const loggedInGoogle = false
const loggedInEmail = false

if (UserloggedIn && debitCard && 2==3 ) {
   console.log("allow to buy course");  
}

if (loggedInGoogle || loggedInEmail){
   console.log("user logged in");
}

