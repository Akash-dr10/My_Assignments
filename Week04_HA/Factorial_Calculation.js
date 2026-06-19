"use strict";
//1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer, 
//and returns its factorial. 
//2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative 
//number is passed, the function should throw an error. 
//3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer 
//from 2 up to `n`. 
//4. Include example calls to the `factorial` function with different integers to demonstrate the 
//function’s functionality. Include at least one example where an error is thrown due to a negative 
//input. 
function factorial(n) {
    if (n < 0) {
        throw new Error("Execution terminated");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log("Factoial of 5 is:", factorial(5));
console.log("Factoial of 0 is:", factorial(0));
console.log("Factoial of 1 is:", factorial(3));
