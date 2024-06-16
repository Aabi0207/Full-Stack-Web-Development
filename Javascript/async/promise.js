const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Fullfilled")
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise Consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2")
        resolve()  // without this then method won't get resolved
    }, 1000)
}).then(() => {
    console.log("async 2 resolved")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Abhishek", email: "abhi@gmail.com"})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFout = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({username: "Abhishek", salary: "50LPA"})
        } else {
            reject("Error: No response")
        }
    }, 1000);
})

promiseFout
.then((data) => {
    console.log(data)
    return data.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({username: "Javascript", salary: "50LPA"})
        } else {
            reject("Error: No Javascript response")
        }
    }, 1000);
})

async function runPromise() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

runPromise()   // If you don't write this line it will throw an error

// async function getAllUser(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json() // Here you have to use await because it takes time
//         console.log(response)
//     } catch(error) {
//         console.log("E: ", error)
//     }
// }

// getAllUser()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))


// getting response first or last depends on the internet speed 
// fetch is the modern syntax
// fetch returns a promise thats why we can use then and catch on it
// if extra info is required on fetch watch youtube chai aur javascript video no. 40

