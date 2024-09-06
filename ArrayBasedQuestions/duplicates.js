function removeDuplicates(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    
    return result;
  }
  
  // Example usage:
  const arr = [1, 2, 2, 3, 4, 4, 5, 3];
  const result = removeDuplicates(arr);
  console.log(result); // Output: [1, 2, 3, 4, 5]
  