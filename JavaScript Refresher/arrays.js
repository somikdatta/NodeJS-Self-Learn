/*
* Arrays are of reference type - i.e. its contents can be changed
* even if the variable storing the array is of const type
* Example - See Push operator below
*/

const hobbies = ['Sports', 'Cooking', 'Reading'];

//Iteration
for (let hobby of hobbies) {
    console.log(hobby);
}

//Map operator - returns new array
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

//Push method - add new element to exxisting array
//hobbies array is declared as const
hobbies.push('Programming');

console.log(hobbies);

//Copy an array
//slice method
const copiedHobbies1 = hobbies.slice();
console.log(copiedHobbies1);
//spread operator
const copiedHobbies2 = [...hobbies];
console.log(copiedHobbies2);

//Create array out of arguments passed to a function
//rest operator
const toArray = (...args) => args;
console.log(toArray(1, 3, 4, 6, 8, 9));

//Array Destructuring
//In arrays we can use any names we want for the new global values
//Values are extracted by position
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);