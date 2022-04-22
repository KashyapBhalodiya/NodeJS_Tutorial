let str = "This is a string";
let str2 = 'This is a string\'s'; // If we use the single cots to so use \.

// template string
let p = `kashyap`;
let str3 = `This is ${p}'s string`; // Inside the brackats consider as the treated like p value
console.log(str3);

// searching

let s = 'this has some data here';
let target = 'has';

console.log(s.indexOf(target));
console.log(s.lastIndexOf(target));

// string methods

let mainstr = "This is a long string";
let smallstr = mainstr.slice(2, 3);
let smallstr2 = mainstr.slice(-6, -4);
console.log(smallstr);
console.log(smallstr2);
console.log(mainstr.substring(4, 8));
console.log(mainstr.substr(4,8));
