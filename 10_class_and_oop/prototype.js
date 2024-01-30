let myName = "vishal          "
let myNam = "visha          "

console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "slinh",


 getspiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
 }
}

Object.prototype.vishal = function(){
    console.log(`vishal is persent in all object`);
}

Array.prototype.heyvishal = function(){
    console.log(`vishal says hallo`);
}

//heroPower.vishal()
//myHeros.vishal()
//myHeros.heyvishal()
//heroPower.heyvishal()

// inheritance

const User = {
    name: "chai",
    email: "akka@google"
}

const Teacher = {
    makeVideo: true
}

const teacherSuppot = {
    isAvailable: false 
}

const TASupport = {
    makeAssigment: 'JS assigment',
    fullTime: true,
    __proto__: teacherSuppot,
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(teacherSuppot, Teacher)

let anotherUsername = "chai Aur code    "

String.prototype.truelength = function(){
  
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true lenght is: ${this.trim().length}`);
}

anotherUsername.truelength()