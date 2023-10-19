const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumes = myNums.map ( (num) => num + 9)

const newNumes = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)


 console.log(newNumes);

