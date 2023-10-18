const coding = ["js", "c++", "py", "java", "cpp"]

// coding.forEach(
//     function (value) {
//         console.log(value);
//     }
// )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(items) {
//     console.log(items);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "js",
        languageNameFile: "javascript"

    },
    {
        languageName: "pathon",
        languageNameFile: "py"

    },
    {
        languageName: "java",
        languageNameFile: "java",

    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})