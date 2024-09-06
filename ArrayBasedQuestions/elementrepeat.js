const arr = [2, 3, 4, 2, 3, 6, 4];
//  o/p : 6

function findFirstNonRepeatingElement(arr) {
  let elementCount = {};

  for (let i = 0; i < arr.length; i++) {
    elementCount[arr[i]] = (elementCount[arr[i]] || 0) + 1; //for checking the frequency
  }
  // Find the first element with frequency 1

  for (let i = 0; i < arr.length; i++) {
    if (elementCount[arr[i]] === 1) {
      return arr[i];
    }
  }
  return null;
}

const result = findFirstNonRepeatingElement(arr);
console.log(result);
