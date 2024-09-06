//Factorial of a given number : factorial - 5 - 5*4*3*2*1 = 120

function factorialIterative(n) {
    if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    }
  
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage
  console.log(factorialIterative(5)); // 120