const str = "abcccbaafghjuytaaaaagvg";

function frequencyCheck(str) {
    const frequency = {}; // Corrected variable name: 'frequency'

    for (const char of str) { // Use 'char' instead of 'num'
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency; // Move 'return' outside of the loop
}

console.log(frequencyCheck(str));
