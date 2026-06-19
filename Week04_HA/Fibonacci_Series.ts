//1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative 
//integer, and returns the nth Fibonacci number. 
//2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two 
//Fibonacci numbers and update these iteratively up to `n`. 
//3. Provide example calls to the `fibonacci` function with different integers to demonstrate the 
//function’s functionality. 

function fibonacci(n: number): number{

    if(n<0){

        throw new Error("Execution terminated")

    }

    if(n===0) return 0
    if(n===1) return 1

    let a=0
    let b=1
    let result=0

    for(let i=2;i<=n;i++)
    {
        result=a+b
        a=b
        b=result
    }

    return result

}

console.log("Fibonacci of 5 is:", fibonacci(5))
console.log("Fibonacci of 0 is:", fibonacci(0))
console.log("Fibonacci of 1 is:", fibonacci(1))
console.log("Fibonacci of 8 is:", fibonacci(8))