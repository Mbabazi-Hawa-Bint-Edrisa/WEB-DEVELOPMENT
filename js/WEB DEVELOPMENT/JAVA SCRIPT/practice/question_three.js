function maximumOfThreeNumbers() {
    // Prompt for 3 inputs
    const input1 = prompt("Enter the first number:");
    const input2 = prompt("Enter the second number:");
    const input3 = prompt("Enter the third number:");

    // Convert inputs to numbers
    const number1 = parseFloat(input1);
    const number2 = parseFloat(input2);
    const number3 = parseFloat(input3);

    // Use Math.max to get the maximum
    const maxNumber = Math.max(number1, number2, number3);
    
    return maxNumber;
}

// Call the function and display the result
const maximum = maximumOfThreeNumbers();
console.log("The maximum of the three numbers is:", maximum);
