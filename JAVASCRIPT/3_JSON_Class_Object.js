// Object Oriented Programming

// allows to create objects without defining the class
// one way to create an object
var bird = {
    x: 100,
    y: 200,
    color: "blue",
    eggs: ["One", "Two", "Three"],

    fly:function() {
        console.log("Bird is flying.", this.x, this.y); // this -> referes to the current object
    }

};

// For loop
for (let i=0; i<bird.eggs.length; i++) {
    console.log(bird.eggs[i]);
}

bird.fly();

// For each loop
bird.eggs.forEach(function(idx, val) { // iterating pairs
    console.log(idx, val);
})

// ---------------------------------------------------------

// second way to create an objects
var apple = {
    taste: "Sweet",
    color: "Red",
};

// one way to create a multiple objects
function Fruits(taste, color) {
    this.taste = taste;
    this.color = color;
}

// new keyword
let mango = new Fruits("Sweet", "Yellow");
let orange = new Fruits("Sour", "Orange");

console.log(apple);
console.log(apple.taste);
console.log(apple.color);
console.log(mango);

// Class keyword (ECMA script)
// class declaration
class Flower {
    constructor(name, color) {
        this.color = color;
        this.name = name;
    }
};

let f = new Flower("Lotus", "Pink");
console.log(f);

// class expression
let fruitExpression = class {
    constructor(name, color) {
        this.color = color;
        this.name = name;
    }
};

let f2 = new fruitExpression("Rose", "Red");
console.log(f2);
