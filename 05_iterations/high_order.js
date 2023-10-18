// for of array

// ["", "", ""]
// [{}, {}, {}], 

const myArray = [1, 2, 3, 4, 5]

for (const num  of myArray) {
   // console.log(num);
}

const greeting = "hello world"
 for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
 }

 // Maps

 const map =  new Map()
 map.set('in', "india")
 map.set('USA', "United state of America")
 map.set('Fr', "France")
 map.set('in', "india")

 //console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game' : "NFS",
    'game1' : "spiderman",
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }










