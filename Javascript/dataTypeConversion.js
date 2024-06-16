let score = "33"

let valueInNumber = Number(score)
console.log(valueInNumber);

let score2 = ""
let valueInNumber2 = Number(score2)
console.log(valueInNumber2)
console.log(typeof valueInNumber2)

// null to 0
// undefined to NaN
// true to 1
// false to 0
// "str" to NaN
// "" to 0
// "33" to 33

let isLoggedIn = NaN
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 to true
// 0 to false
// "" to false
// "str" to true
// null to false
// undefined to flase
// NaN to false
