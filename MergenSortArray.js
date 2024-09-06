//merge n sort the two different aray

function twomergedArray(arr1, arr2) {
    const mergedarray = arr1.concat(arr2);
  
    mergedarray.sort((a, b) => a - b);
  
    return mergedarray;
  }
  
  const array1 = [1, 2, 3, 4, 56, 3, 8, 5];
  const array2 = [2, 6, 54, 2, 7, 8];
  
  const resultsorted = twomergedArray(array1, array2);
  console.log(resultsorted);