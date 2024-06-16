const month = 28

if (month <= 3) {
    // console.log("month is less than or equal to 3")
} else {
    // console.log("The month is greater than 3")
}

// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("Feburary")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June")
//         break;
//     case 7:
//         console.log("July")
//         break;
//     case 8:
//         console.log("August")
//         break;
//     case 9:
//         console.log("Sepetmber")
//         break;
//     case 10:
//         console.log("October")
//         break;
//     case 11:
//         console.log("November")
//         break;
//     case 12:
//         console.log("December")
//         break;

//     default:
//         console.log("Invalid Month")
//         break;
// }

// Falsy values in Javascript
// false, 0, -0, 0.0, BigInt 0n, "", null, undefiend, NaN

// Nullish Coalescing Operator (??)

let val1;

val1 = 5 ?? 10 // 5
console.log(val1)

val1 = null ?? 50 // 50
console.log(val1)

val1 = undefined ?? 15 // 15
console.log(val1)

val1 = null ?? undefined  // undefined
console.log(val1)

val1 = undefined ?? null  // null
console.log(val1)


// Usual syntax
// val1 = null ?? Complex function whose result is not Known

// Ternery Operator

const iceTea = 100
iceTea >= 80 ? console.log("More than 80") : console.log("Less than 80")