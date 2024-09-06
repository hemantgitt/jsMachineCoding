//find the missing element in the array

Array.prototype.findMissingElement = function () {
    if (this.length === 0) {
      throw new Error("Array should be non-empty");
    }
  
    // Find the minimum and maximum values in the array
    const min = Math.min(...this);
    const max = Math.max(...this);
  
    // Calculate the expected sum of the consecutive elements
    const expectedSum = (max * (max + 1)) / 2 - (min * (min - 1)) / 2;
  
    // Calculate the actual sum of the array elements
    const actualSum = this.reduce((acc, val) => acc + val, 0);
  
    // The difference between the expected and actual sum is the missing element
    return expectedSum - actualSum;
  };
  
  // Example usage
  const myArrays = [1, 2, 4, 5, 6];
  console.log(myArrays.findMissingElement()); // 3
  
  //for the case of odd
  
  Array.prototype.findMissingOddNumbers = function () {
    if (this.length === 0) {
      throw new Error("Array should be non-empty");
    }
  
    const min = Math.min(...this);
    const max = Math.max(...this);
    const missingOddNumbers = [];
  
    for (let i = min; i <= max; i++) {
      if (i % 2 !== 0 && !this.includes(i)) {
        missingOddNumbers.push(i);
      }
    }
  
    return missingOddNumbers;
  };
  
  // Example usage
  const arr = [1, 3, 7, 9];
  console.log(arr.findMissingOddNumbers()); // [5]