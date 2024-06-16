// Immediately Invoked Function Expression (IIFE)

(function dbConnect() {  // Named IIFE
    console.log("DB CONNECTED")
})();

( (name) => {
    console.log(`My name is ${name}`)
})("Abhishek");


