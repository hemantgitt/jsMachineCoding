const arr = [1,1, 2, 3, 3, 3, 4, 3, 1, 1, 6, 7, 8, 8, 8];

// Initialize an empty object to store the frequency of each element
const frequencyCounter = {};

// Iterate over the array and count the occurrences of each element
arr.forEach(num => {
  frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
});

console.log(frequencyCounter); 


