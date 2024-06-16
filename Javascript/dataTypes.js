"use strict" // treat all js code as newer version // by default

let name = "Abhishek" // String
let age = 18 // Number
let isLoggedIn = false
let obj = {
    name: "Ashish",
    age: 17
}

let bigInteger = 3n
console.log(typeof bigInteger)  //bigint
console.log(typeof name)  //string
console.log(typeof age) //number
console.log(typeof isLoggedIn)  //boolean
console.log(typeof null)   //object
console.log(typeof undefined)  //undefined
console.log(typeof obj)  //object

// Types of Data are Primitive and Non Primitive

// Primitive
// String, Number, Boolean, Null, Undefined, Sumbol, BigInt

// Reference (Non-Primitive)
// Array, Objects, Function

// Primitive data types gives copy of data they are stored into the stack memory

// Reference data types gives a reference for the same they are stored into the heap data structure

