let hero = ["Thor", "Spiderman"]

let obj = {
    username: "Abhishek",
    age: 18,
    getAge: function(){
        console.log(`The age of ${this.username} is ${this.age}`)
    }
}

Object.prototype.abhi = function() {
    console.log("This property is been applied to all the objects")
}

// obj.abhi()
// hero.abhi()   // An Array is also the object

const user = {
    username: "Abhishek",
    age: 18
}

const teacher = {
    name: "Shantabai",
    hasVideo: true
}

const TeachingSupport = {
    hasSupport: false
}

const TASupport = {
    teachings: "javascript",
    fullTime: true,
    // __proto__: TeachingSupport
}

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, TASupport)

// console.log(TeachingSupport.teachings)

String.prototype.trueLength = function() {
    return this.trim().length
}

let myStr = "Abhi     "
console.log(myStr.length)
console.log(myStr.trueLength())