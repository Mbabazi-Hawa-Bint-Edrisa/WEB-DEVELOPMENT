let text = "The rain in SPAIN stays mainly in the plain";
let match =text.match("ain");
console.log(match)

let match2 =text.match(/ain/g);
// regular expression the g gets all the ain in the string, makes a global search but is case sensitive
console.log(match2)
// gi gets all ains  regardless of the case
let match3 = text.match(/ain/gi);
console.log(match3)

// matchAll()
let text2 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator1 = text2.matchAll(Cats);
console.log(Array.from(iterator1))
const iterator = text2.matchAll(/Cats/gi);
console.log(Array.from(iterator))
