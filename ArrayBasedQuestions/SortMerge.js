function mergeAndSort(...arrays) {
    const mergedArray = [].concat(...arrays); // Merge all arrays
    return mergedArray.sort((a, b) => a - b); // Sort the merged array
  }
  
  // Example usage:
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  const arr3 = [0, 7, 8];
  
  const result = mergeAndSort(arr1, arr2, arr3);
  console.log(result); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  