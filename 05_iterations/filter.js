//const coding = ["js", "ruby", "java", "cpp"]

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4) there no retun key word use

// const newNums = myNums.filter( (num) => {  // if open scope then use retun key word
//    return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })


// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: ' Non-fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996}
];

//const userBooks = books.filter( (bk) => bk.genre === 'History' )

const userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History" )
console.log(userBooks);