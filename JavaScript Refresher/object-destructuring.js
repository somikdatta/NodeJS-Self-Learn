const person = {
    name: "Somik",
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

//Trivial way to print a key of an object
const printName = (personData) => {
    console.log(personData.name);
}
printName(person);

//Using object destructuring - drops other properties of object
const printNameDestructured = ({ name }) => {
    console.log(name);
}
printNameDestructured(person);

//Object destructuring - global scope
//property name is used for destructuring object
const { name, age } = person;
console.log(name, age);