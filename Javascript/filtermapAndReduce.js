// forEach never returns a value thus we require different methods

let coding = ["Java", "Javascript", "Python", "HTML"]

const values = coding.forEach( (item) => {
    return item
})

// console.log(values)

// +++++++++++++++++++++++ filter +++++++++++++++++

let myNums = [1, 2, 4, 3, 5, 6, 7]

// console.log(myNums.filter( (item) => {
//     return item > 2 // explicit return
// }))

// console.log(myNums.filter( (num) => num < 4))

// +++++++++++++++++++++++ Map +++++++++++++++++++++++++

let plusOne = myNums.map( (num) => num + 1)
// console.log(plusOne)

// ++++++++++++++++++++++++ Chaning ++++++++++++++++++++++++

const newNums = myNums.map( (num) => num * 10)
                            .map( (num) => num + 1)
                            .filter( (num) => num >= 40)

// console.log(newNums)

// ++++++++++++++++++++++++ Reduce +++++++++++++++++++++++++

const nums = [1, 2, 3]

console.log(nums.reduce( (acc, num) => acc + nums, 0))