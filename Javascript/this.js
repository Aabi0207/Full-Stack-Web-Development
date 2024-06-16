const obj = {
    username: "Abhishek",
    age: 18,
    welcomeMessage:function (){   // Arrow function isn't used where you want to use this
        // console.log(`My name is ${this.username} and my age is ${this.age}.`)
        console.log(this)
    }
}

// obj.welcomeMessage()

// console.log(this)  // As we are in Node Environment this gives and empty object
//but in browser it gives an window object

function printThis(){
    console.log(this)  // Environment Information
}

const arrowPrintThis = () => {
    console.log(this) // {} Empty Object
}

// arrowPrintThis()

// Implicit Return 

const addTwoNumbers = (num1, num2) => num1 + num2
// console.log(addTwoNumbers(2, 5))

// In case of objects you have to use () brackets around it