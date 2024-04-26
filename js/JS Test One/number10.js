function sumAndTrippple(x, y) {
    let sum = x + y;
    let result;

    if (x === y) {
        result = 3 * sum;
        console.log("numbers are similar");
    } else {
        result = sum;
        console.log("numbers differ.");
    }

    console.log("Sum: " + sum);
    console.log("Result: " + result);
    
    return result;
}

let first_number = 3;
let second_number = 3;
let finalResult = sumAndTrippple(first_number, second_number);
console.log("Final Result: " + finalResult);
