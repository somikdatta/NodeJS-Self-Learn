const person = {
    name: "Somik",
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

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