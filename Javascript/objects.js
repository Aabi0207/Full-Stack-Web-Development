const user = {
    name: "Abhishek",
    age: 18,
    college: "D. Y. Patil College of Engineering, Akurdi",
    isLoggedIn: true
}

// console.log(user.name)  //Abhisek
// console.log(user["name"])  //Abhisek

// How to add a sumbol as a Key

const mySym = Symbol("key1")

// user[mySym] = "myKey1"
// console.log(user)
// console.log(user[mySym])

const JsUser = {
    [mySym]: "myKey1"
}

// console.log(JsUser)

Object.freeze(JsUser) // From now on you won't be able to add new values to the object

JsUser["tata"] = "bata"  // It won't give the error but it won't add the value
// console.log(JsUser)

user.greetings = function() {
    console.log("Hello World!")
}

// console.log(user.greetings)  // Returns the reference
// user.greetings()

user.greetingTwo = function(){
    console.log(`Hello ${this.name} how are you!`)  // this keyword referes to the current objecct
}

// user.greetingTwo()

const tinderUser = new Object() // singleton Object

const newUser = {}  // Non singleton Object

const obj1 = {
    city: "Pune"
}

const obj2 = {
    state: "Maharashtra"
}

const obj3 = {
    country: "India"
}

const obj4 = Object.assign({}, obj1, obj2, obj3)

// console.log(obj4)

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

const {greetingTwo} = user  // Instead of using user.greetingTwo
// console.log(greetingTwo)

const {greetingTwo: greet} = user
// greet()  // this keyword don't work in this case

// The method above is Known as Destructuring
