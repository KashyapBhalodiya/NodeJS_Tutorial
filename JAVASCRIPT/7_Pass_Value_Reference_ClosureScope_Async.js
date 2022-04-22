/*                 ES6 promises                */
// function fakeDownload(done) {
//     setTimeout(function() {
//         let downloadedData = "Some data we ripped of the interwebs.";
//         done(downloadedData);
//     }, 1000)
// }

// fakeDownload(function (data) {
//     console.log("We download the file, which had this data. ->");
//     console.log(data);
// })

// function fackDownloadPromise(correct) {
//     return new Promise(function (resolve, project) {
//         setTimeout(function () {
//             let downloadData = "Some data from the net";
//             console.info("Downloading has completed.");
//             if (correct) {
//                 resolve(downloadData);
//             } else {
//                 reject(new Error("Could not download file"));
//             }
//         }, 100)
//     })
// }

// fackDownloadPromise(true).then(function (data) {
//     console.log("The data that we download is ---->");
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// })

// let downloaded = fackDownloadPromise(true);
// downloaded.catch(function (err) {
//     console.log(err);
// }) 

// setTimeout(function () {
//     downloaded.then(function (data) {
//         console.info("The data that was downloaded is this ---->");
//         console.info(data);
//     })
// })

/*                IIFEs and their usage             */

// (function sayHello () {
//     console.log("Hello");
// })();

// function doMatch() {
//     console.log("3 ^ 4 = " + Math.pow(3, 4));
//     console.log("4 ^ 3 = " + Math.pow(4, 3));
//     console.log("Root(2) = " + Math.sqrt(2));
//     console.log("sin(10) = " + Math.sin(10));
// }

// Instead of writing upper code 

// (function (l, p, r, s) {
//     l("3 ^ 4 = " + p(3, 4));
//     l("4 ^ 3 = " + p(4, 3));
//     l("Root(2) = " + r(2));
//     l("sin(10) = " + s(10));
// })(console.log, Math.pow, Math.sqrt, Math.sin);

// for (var i = 0; i < 10; ++i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100)
// }

// Instead of writing upper code 

// for (var i = 0; i < 10; ++i) {
//     setTimeout(console.log, 100, i);
// }

/*                         Copy by value and by reference              */

// pass by value

// var quidditchwinner = "Harry Potter";

// function changeWinner(winner) {
//     console.log("Original winner : " + winner);
//     winner = "Draco Malfoy";
//     console.log("Chaged winner : " + winner);
// }

// console.log("Winner was : " + quidditchwinner);

// changeWinner(quidditchwinner);

// console.log("Now the winner is: " + quidditchwinner);

// var quidditchwinner = [
//     "Harry", "Roy", "Hermoine"
// ];

// function changeWinner(winners) {
//     winners[0] = "Draco";
//     winners[1] = "Crabbe";
//     winners[2] = "Pansy";
// }

// console.log("The winners were = " + quidditchwinner);
// changeWinner(quidditchwinner);
// console.log("Now the winneres are : " + quidditchwinner);

/*                   var , let , const             */

// var a = 10;
// a++;
// console.log(a);

// Error because const is use to create a object
// const b = 12;
// b++;
// console.log(b);

// const obj = {
//     k1: 'abcd',
//     k2: 10,
//     k3: false
// };

// obj.k4 = 123;
// console.log(obj.k4);

// delete obj.k1;
// console.log(obj.k1); // delete as well

// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);

/*                      Closure scope                 */

// function count() {
//     var initial = 1;
//     function plus() {
//         console.log(++initial);
//     }
//     return plus;
// }

// var c = count();
// c();

// function createCounter(initVal, deltaVal) {
//     return {
//         up() {
//             initVal += deltaVal;
//             console.log(initVal);
//         },
//         down() {
//             initVal -= deltaVal;
//             console.log(initVal);
//         }
//     }
// }

// var c = createCounter(10, 2);
// c.up();
// c.down();
// c.down();

/*                                     setTimeout and setInterval              */

// function sayHello() {
//     console.log("Hello!");
// }

// setTimeout(sayHello, 1000);
// let intervalID = setInterval(sayHello, 1000); // This is going infinite so we need to stop the interval

// clearInterval(intervalID);


// setInterval(function (){
//     console.log("This runs after the 1 sec");
// }, 1000);

// // OR

// var myFun = function() {
//     console.log("This runs after the 1 sec")
// }

// setInterval(myFun, 1000);