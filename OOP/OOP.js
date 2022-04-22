// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     return 10;
// }

// let p = new Person('harry potter', 20);
// console.log('p = ' + JSON.stringify(p));

// Object Inheritance

// let a = {x: 10, y: 'string name', r: false}

// let b = Object.create(a)

// let c = Object.create(b);

// console.log(a)
// console.log(b)

// b.y = 'kashyap'
// console.log(b)
// console.log(c.y)

// Proto chain

// console.log(b.__proto__ == a)
// console.log(c.__proto__ == a)
// console.log(c.__proto__ == b)

// console.log(a.isPrototypeOf(b));
// console.log(a.isPrototypeOf(c));

// console.log(b.__proto__.x++);

// let z = "hello"

// console.log(z.__proto__ == String.prototype);

// Prototype Functions

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.isAdult = function() {
//         return this.age >= 18
//     }
// }

// let p = new Person('Harry Potter', 20)
// console.log(p.isAdult());

// ES6 classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}

let p = new Person('Harry Potter', 18);
let s = new Student('Critiano Ronaldo', 36, 'Portual');

console.log(p);
console.log(s);