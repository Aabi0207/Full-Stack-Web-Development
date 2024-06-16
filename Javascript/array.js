const myArr = [1, 2, "Abhi", true]
// console.log(myArr)

// Note: Array always creates shallow copies and proviede with the references

let newArr = new Array(2, 3, 34, 4, 7)
// console.log(newArr)

newArr.push(47)
// console.log(newArr)

newArr.pop()
// console.log(newArr)

newArr.unshift(38)
// console.log(newArr)

newArr.shift()
// console.log(newArr)

// console.log(newArr.includes(38))

let arr = newArr.join(" ")
// console.log(arr)

let slice1 = newArr.slice(1, 3)
// slice1[0] = 57
// console.log(slice1)
// console.log(newArr)

let splice1 = newArr.splice(1, 2)
// console.log(splice1)
// console.log(newArr)

// console.log(newArr.concat(splice1))

const mergedArr = [...newArr, ...splice1]
// console.log(mergedArr)

let arr1 = [[4, 5], 56, [34, [4, 5, 6, 7]]]
// console.log(arr1.flat(2))  //returns a merged array upto 2 depths

console.log(Array.isArray("Abhi"))
console.log(Array.from("Abhi"))
console.log(Array.of(1, 2, 3,4))