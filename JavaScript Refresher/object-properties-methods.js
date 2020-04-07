const person = {
    name: "Somik",
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

// We can also do
// const person = {
//     name: "Somik",
//     age: 21,
//     greet: function() {
//         console.log('Hi, I am ' + this.name)
//     }
// }


//'this' within arrow function realizes global scope so
// const person = {
//     name: "Somik",
//     age: 21,
//     greet: () => {
//         console.log('Hi, I am ' + this.name)
//     }
// }
//above code, when called will print - Hi, I am undefined

person.greet();