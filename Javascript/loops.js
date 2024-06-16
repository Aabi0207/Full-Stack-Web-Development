let arr = ["Abhi", "Ashu", "Puri", "Viraya", "Bharya"]

// +++++++++++++++++++++++For++++++++++++++++++++++++++++++

for (let index = 0; index < 10; index++) {
    // console.log(index + 1);
}

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element)
}

// For getting every index value of the arr 
// This is the traditional loop

// ++++++++++++++++++++++++++++While+++++++++++++++++++++++++++++++

let count = 0
// while (count < 5) {
//     // console.log(count)
//     count++
// }

// To perform task until the condition gets false

// ++++++++++++++++++++++++++Do-while++++++++++++++++++++++++++++++++

do {
    // console.log(count)
} while (count > 5);

// Use this loop when you have to execute the loop once whatever the case

// +++++++++++++++++++++++++++For of+++++++++++++++++++++++++++++++++++

for (const name of arr) {
    // console.log(name)
}

// Use this loop when you need the elements of the array
// Objects are not iterable from the for of

// ++++++++++++++++++++++++++++Maps++++++++++++++++++++++++++++++++++++

const map = new Map()
map.set(
    'State', 'Maharashtra'
)
map.set('name', "Abhishek")
// console.log(map) // Map(1) { 'State' => 'Maharashtra' }

for (const [key, value] of map) {
    // console.log(`Key: ${key}, Value: ${value}`)
}

// +++++++++++++++++++++++++++ForIn+++++++++++++++++++++++++++++++++++++

const obj = {
    name: "Abhishek",
    clg: "dy patil",
    fees: 70000
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        // console.log(element)  // Values
    }
}

for (const key in obj) {
    // console.log(key)  // Keys
}

for (const key in arr) {
    // console.log(key)  // keys of arr are the index position of the elements
}

// This is used for iterating the objects 

// ++++++++++++++++++++++++++++++++ForEach++++++++++++++++++++++++++++++++++=

// arr.forEach( (item) => console.log(item))

function printMe(item) {
    console.log(item)
}

// arr.forEach(printMe)

arr.forEach( (item, index, array) => {
    // console.log(`${item}, ${index}, ${array}`)
})

const newArr = arr.forEach( (item) => {
    // return item + "Bira"
})

// console.log(newArr)
// console.log(arr)

// If the response from the database returned use for each 
// Remember foreach never returns any value as the response


