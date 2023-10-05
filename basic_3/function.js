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