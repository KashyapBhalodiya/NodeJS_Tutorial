console.log(beta())

function alpha () {
    return "A"
}

console.log(beta())
// console.log(gamma()) // ReferenceError


function beta() {
    return "B"
}

let gamma = function () {
    return "C"
}

console.log(beta())

function area(height, width) {
    if (!width) {
        return Math.PI * height * height
    }
    return height * width
}

console.log('area 3,4 ', area(3,4))
console.log('area 4 ', area(4))

function hello () {
    let arguments = 'asdasd'
    console.log('hello world ' + arguments[0] + arguments[1])
}

hello(1, 2)
hello('Arnav', 'Gupta')


let a = 10;
console.log(a);

let b = [1,2,3,4,5];
console.log(b);

c = 20; // Global variable
var d = 12; //Function scope
let e = 10; //Block scope

function fun() {
    let a = 5;
    if (a === 5) {
        let b = 10;
        console.log("Inside", b);
    }
    console.log("Outside", b);
}

fun();

function fun() {
    let a = 5;
    if (a === 5) {
        f = 100; // Global variable
        console.log("Inside", f);
    }
    console.log("Outside", f);
}

fun();
console.log("Global", f);

function square_root(n) {
    console.log(Math.sqrt(n));
    return;
}
console.log("First sqrt: ");
square_root(9);

// Function hoisting
var sqrt_n = function(n) {
    console.log("Second sqrt: \n" + Math.sqrt(n));
    return;
}

sqrt_n(10);

// Arrays
let arr = ["Apple", "Mango", "Orange"];
console.log(arr);
arr.push("Banana"); // insert at the last of the array
arr.indexOf("Mango"); // Find the index
a.shift(); // Remove from front
a.unshift("Kiwi"); // insert at first

for (let i=0; i<5; i++) {
    console.log(arr[i]);
}