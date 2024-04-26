const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person)

const car = {"brand_name":'Toyota'}


object methods
const person = {
    firstName: "John",
    lastName : "Doe",
    id:5567,
    fullName : function()
     {
        return this.firstName + " " + this.lastName;
      }
    };
    console.log(person)
    this refers to a person object , it returns the fname and lname

    const person = {
        firstName: "John",
        lastName: "Doe"
      };
      console.log( person.firstName)

      
const person = {
  firstName: "Jane",
  lastName: "Doe"
};

person.country="Uganda"

console.log(person)


