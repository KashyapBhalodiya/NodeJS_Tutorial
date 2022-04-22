a = 20; // global variable
var b = 12; // function scope
let c = 10; // block scope

function fun() {
    let b = 30;
    if (b === 12) {
        let a = 12;
        console.log("inside the function ", a);
    }
    console.log("outside the function", a);
}
fun();

function square(n) {
    console.log(Math.sqrt(n));
    return;
}
square(25);

// function hoisting
var sqrt_n = function() {
    console.log("In second square root");
    return;
}
sqrt_n(16);

