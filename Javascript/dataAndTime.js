let myDate = new Date()
// console.log(myDate)  //2024-06-09T03:09:11.883Z
// console.log(typeof myDate) //object

// console.log(myDate.toString())  //Sun Jun 09 2024 08:40:40 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString("IN"))
// console.log(myDate.toDateString())
// console.log(myDate.getUTCDate())

let createDate = new Date(2024, 4, 2)
// console.log(createDate.toString())

let myCreatedDate = new Date("2024-05-2")
// console.log(myCreatedDate.toString())

console.log(myCreatedDate.getMonth() + 1)
console.log(myCreatedDate.getFullYear() + 1)


