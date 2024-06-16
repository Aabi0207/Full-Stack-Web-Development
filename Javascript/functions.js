const SayMyName = function() {
    console.log("Abhishek Maroti Biradar")
}

const addTwoNumbers = function(num1, num2) {   //num1 and nuum2 here are called parameters
    return num1 + num2
}

// console.log(addTwoNumbers(2, 2))  // Here 2 and 2 are arguments

function calculateCartPrice(...prices) {   // Here ... is called the rest operator
    return prices.reduce( (acc, price) => acc + price, 0)
} 

// console.log(calculateCartPrice(200, 300, 500)) // 1000

const user = {
    username: "Abhishek",
    country: "India"
}

function handleObject(myObj) {
    console.log(myObj.username)
}

// handleObject(user)

// addOne(5) // You can use such function before assignment

function addOne(num) {
    console.log(num + 1)
}

// addTwo(8)   // Reference Error

const addTwo = function(num) {
    console.log(num + 2)
}

// addTwo(8)

