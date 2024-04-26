// Template Strings allow both single and double quotes inside a string:
// let text1 = `He's often called "Johnny"`;

// multiline comment
// let text2 =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// let text3 = `
// my
// name
// is 
// Hawa
// `;
// interpolating variables and strings
const student = {
    name: "Mbabazi",
    age: 20,
    class: 2023,
};
console.log(`My name is ${student.name}, I am ${student.age} years old.`)

const statement2 = `I am in  WITI ${student.class} class`;
console.log(statement2);
