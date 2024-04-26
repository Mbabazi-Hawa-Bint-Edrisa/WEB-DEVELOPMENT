// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Reverse the cleaned string
//     const reversedStr = cleanStr.split('').reverse().join('');
    
//     // Check if the original and reversed strings are equal
//     return cleanStr === reversedStr;
// }

// // Test cases
// console.log(isPalindrome("madam")); // Output: true
// console.log(isPalindrome("nurses run")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

function generateCombinations(str) {
    const result = [];
    const length = str.length;

    // Iterate over the string to generate all combinations
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j <= length; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}

// Test the function
const combinations = generateCombinations('dog');
console.log(combinations);




// function reverseNumber(num) {
//     // Convert the number to a string
//     let numStr = num.toString();

//     // Split the string into an array of characters, reverse it, and join it back into a string
//     let reversedStr = numStr.split('').reverse().join('');

//     // Convert the reversed string back to a number
//     let reversedNum = parseInt(reversedStr);

//     return reversedNum;
// }

// // Example usage:
// let x = 32243;
// let reversedX = reverseNumber(x);
// console.log(reversedX); // Output: 34223

// // Remove non-alphanumeric characters and convert to lowercase
// const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
// // Compare the original string with its reversed version
// return cleanedStr === cleanedStr.split('').reverse().join('');

