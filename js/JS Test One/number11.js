function WordArray(inputString) {
    
    return inputString.split(/\s+/);
}

// Example :
let string = "My name is Mbabazi Hawa";
let wordsArray = WordArray(string);
console.log(wordsArray);
