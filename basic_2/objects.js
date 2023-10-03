// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const jsuser = {
    name: "vishal",
    "full name": "vishal singh",
    [mySym]: "myKey1", //symbol declarition
    age: 20,
    location: "noida",
    email: "akki@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["monday", "saturday"]

}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email = "akki@blinkit.com"
//Object.freeze(jsuser)

jsuser.email = "akki@blinkit.com"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello Js user");
}
jsuser.greeting2 = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());