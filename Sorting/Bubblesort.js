// Array with duplicates
const array = [1, 2, 3, 3, 2, 4, 5, 3, 4, 65, 7, 8, 5, 5];

// Remove duplicates
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Bubble Sort function
function BubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Remove duplicates and then sort
const uniqueArray = removeDuplicates(array);
const sortedResult = BubbleSort(uniqueArray);

console.log(sortedResult);
