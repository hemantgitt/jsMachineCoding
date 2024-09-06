
//How to find second-largest value n remove the first largest value in the array

Array.prototype.findSecondLargest = function () {
    if (this.length < 2) {
      throw new Error("Array should have at least two elements");
    }
  
    // Step 1: Find the maximum value
    const max = Math.max(...this);
  
    // Step 2: Remove the maximum value from the array
    const newArray = this.filter((item) => item !== max);
  
    // Step 3: Find the second-largest value
    const secondMax = Math.max(...newArray);
  
    return secondMax;
  };
  
  // Example usage
  const myArr = [1, 2, 3, 4, 5];
  console.log(myArr.findSecondLargest()); // 4
  
  
  
  //find odd even numbers in the aray
  
  Array.prototype.findEvenAndOddNumbers = function () {
    const evenNumbers = [];
    const oddNumbers = [];
  
    this.forEach((num) => {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
    });
  
    return { evenNumbers, oddNumbers };
  };
  
  // Example usage
  const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { evenNumbers, oddNumbers } = arrs.findEvenAndOddNumbers();
  console.log("Even Numbers:", evenNumbers); // [2, 4, 6, 8]
  console.log("Odd Numbers:", oddNumbers); // [1, 3, 5, 7, 9]