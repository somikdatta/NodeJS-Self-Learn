const name = "Somik";
let age = 21;
const hasHobbies = true;

//basic arrow function example
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        "Name is " +
        userName +
        ", age is " +
        userAge +
        " and the user has hobbies: " +
        userHasHobby
    );
}

//arrow function with one inner statement
//can omit curly braces
const add = (a, b) => a + b;

//arrow function with one parameter
//can omit parenthesis
const addOne = a => a + 1;

console.log(addOne(1));

console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));