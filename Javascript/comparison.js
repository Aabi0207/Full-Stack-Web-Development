console.log("2" > 1)  // true js converts strings into numbers before comparision but still it is not a good approach
console.log(null > 0) // false
console.log(null == 0);  //false
console.log(null >= 0)  // true (inconsistencies are created)

console.log("2" === 2)   //false type is also checked (strict checking)