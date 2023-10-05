function saymyName(){
    console.log("v")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("l")
}

//saymyName()

// function addTwoNumber (number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber (number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(3, "4")

// console.log("Result: ", result);

function loginUserMessage (username = "sam") {
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vishal"));
 console.log(loginUserMessage("vishal"));

 function calculateCartPrice (...num1){
    return num1
 }

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "vishal",
    Price: 199
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
}

// handleObject(user)
handleObject({
    username: "vishal",
    Price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));
