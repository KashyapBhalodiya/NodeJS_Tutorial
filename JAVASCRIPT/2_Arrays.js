let arr = [1,2,3];
console.log(arr);

for (let i = 0; i < 3; i++) {
    console.log(arr[i]);
}

let arr2 = [1, 'hello', false, [1,2,3]];

for (let i=0; i<arr2.length; i++) {
    console.log(arr2[i]);
}

console.log("This is a array value");

for (let val of arr2) {
    console.log(val);
}

console.log("This is a array index");

for (let index in arr2) {
    console.log(arr2[index]);
}

// push and pop

let fruits = ["apple", "mango", "banana"];
console.log(fruits);
fruits.push("melon");
console.log(fruits);

fruits.pop();
console.log(fruits);

// shift and unshift
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi", "grapes");
console.log(fruits);

// Data changing

let notes = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do'];
console.log(notes.slice(4, 6));
console.log(notes.slice(4));
notes.splice(0, 3, 'sa', 're', 'ga');
console.log(notes);

console.log(notes.concat(['sa', 're', 'ga']));
