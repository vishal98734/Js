let a = 100 // Global scope

if(true){
    let a = 10
    const b = 500
    console.log("INNER: ", a);// scope
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "vishal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
// one()

if (true) {
    const username = "vishal"
    if (username === "vishal") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ****************************interesting**********************

console.log(addone(5));
function addone(num) {
    return num + 1
}


addTwo(5)
const addTwo = function(num) {
    return num + 2
}
