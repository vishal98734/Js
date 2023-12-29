// generate a random no

const randomColor = function () {
    const hex = "012345678ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

//console.log(randomColor());
let intervalid
const startChangingColor = function () {
   if(!intervalid){
    intervalid = setInterval(changeBgcolor, 1000)
   }

    function changeBgcolor() {
        document.body.style.backgroundColor = randomColor();

    }
}
document.querySelector("#start").addEventListener('click', startChangingColor)

const stopChangingColor = function () { 
    clearInterval(intervalid)
    intervalid = null
}

document.querySelector("#stop").addEventListener('click', stopChangingColor)
