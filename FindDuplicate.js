// Find duplicacy

Array.prototype.findDuplicates = function () {
    const duplicates = [];
    const seen = new Set();
    const arr = this;
  
    for (let i = 0; i < arr.length; i++) {
      if (seen.has(arr[i])) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      } else {
        seen.add(arr[i]);
      }
    }
  
    return duplicates;
  };
  
  // Example usage
  const myArray = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 5];
  const duplicates = myArray.findDuplicates();
  console.log(duplicates); // [3, 2, 5]