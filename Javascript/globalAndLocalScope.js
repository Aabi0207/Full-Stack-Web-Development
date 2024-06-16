// Scope of var

if (true){
    var variable = "Abhishek"   // It is assigned global scope
}

// console.log(variable)   // Abhishek

if (true){
    let variable2 = "Abhishek"   // Local Scope
}

// console.log(variable2)  // ReferenceError

// Outside the function var and let both have the global scope
// Scope of const just as like the let
