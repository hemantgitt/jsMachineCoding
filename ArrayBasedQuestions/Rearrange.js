function rearrangeArray(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length - 1; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
}

// Example usage:
console.log(rearrangeArray([1, 3, 2, 4, 5, 6])); // Output: [1, 3, 2, 5, 4, 6]
