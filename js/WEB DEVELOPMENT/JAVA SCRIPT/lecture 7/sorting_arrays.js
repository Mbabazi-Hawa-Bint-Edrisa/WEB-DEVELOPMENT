// sort an array of strings in alphabetical order using the sort()
// const fruits = ["apple", "banana", "orange", "kiwi"];
// fruits.sort();
// console.log(fruits); 
// ["apple", "banana", "kiwi", "orange"]

// arranges numbers in ascending order
// SORT ASCENDING
// const numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers); 
// [1, 5, 10, 25, 40, 100]

// Reverse the order of the elements in an array using reverse() method
// const fruits = ["apple", "banana", "orange", "kiwi"];
// fruits.reverse();
// console.log(fruits); 
// ["kiwi", "orange", "banana", "apple"]

// THE FISHER YATES METHOD
// This code is an implementation of the Fisher-Yates shuffle algorithm,
//  which is used to randomly shuffle the elements of an array
// const points method
// const points = [40, 100, 1, 5, 25, 10];
// for (let i = points.length -1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i);
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }
// console.log(points);
// Output: a randomly shuffled version of the `points` array  

// Using the math.max and math.min
//  using the sprad operator(...)
// const numbers = [10, 15, 59, 20];
// const max = Math.max(...numbers);
// console.log(max); 
// Output: 59

//  using min with same functtion
// const min = Math.min(...numbers);
// console.log(min);
 // Output: 10

// math.max() Returns the largest number in an array
// let numbers = [40, 100, 1, 5, 25, 10];
// let a = Math.max(...numbers);
// console.log(a);

// math.min() returns the lowest number in the array
// let numbers = [40, 100, 1, 5, 25, 10];
// let a = Math.min(...numbers);
// console.log(a);

// JavaScript Array Minimum and Max Method
//  min methhod
// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len > 0) {
//       len--;
//     //   This will evaluate false if len is zero 
//       if (arr[len] < min) {
//         min = arr[len];
//       }
//     }
//     return min;
//   }
  
//   const numbers = [10, 15, 59, 20];
//   console.log(myArrayMin(numbers)); // Output: 10

// max method
//   function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len > 0) {
//       len--;
//       if (arr[len] > max) {
//         max = arr[len];
//       }
//     }
//     return max;
//   }
  
//   const numbers = [10, 15, 59, 20];
//   console.log(myArrayMax(numbers)); // Output: 59




// SORTING OBJECTS 
// using sort method
// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 20 },
//     { name: "Bob", age: 25 }
//   ];
  
//   people.sort((a, b) => a.age - b.age);
  
//   console.log(people);
  // [ { name: 'Jane', age: 20 },
  //   { name: 'Bob', age: 25 },
  //   { name: 'John', age: 30 } ]

// sorting by type
// sorts the array cars by type in their alphabetical order
// const cars = [{type:"Volvo", year:2016}, {type:"Saab", year:2001}, {type:"BMW", year:2010}];
// cars.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   }); 
//   console.log(cars);
//   output [
//   { type: 'bmw', year: 2010 },
//   { type: 'saab', year: 2001 },
//   { type: 'volvo', year: 2016 }
// ]

// ARRAY ITERATION
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }
// console.log(txt);

// Array map and flatMap
// The map() and flatMap() methods are used to transform arrays in JavaScript
// the map()
// const numbers = [1, 2, 3, 4, 5];
// const strings = numbers.map(number => number.toString());
// console.log(strings); // ["1", "2", "3", "4", "5"]

// an example of using the flatMap() method to transform an array of strings into an array of arrays of 
// characters, and then flattening the resulting array

// const strings = ["hello", "world"];
// const characters = strings.flatMap(string => string.split(""));
// console.log(characters); // ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]

// JavaScript Array filter()
// using the filter() method to create a new array containing only the elements
//  in the numbers array that are greater than 18
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// function myFunction(value, index, array) { return value > 18; }
// console.log(over18);

// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction, 0);

// function myFunction(total, value) {
//   return total + value;
// }

// console.log(sum); // Output: 99
  



