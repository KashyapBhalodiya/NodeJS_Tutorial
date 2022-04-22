/* Promises: used to handle asynchronous operations in javascript */

// Create promises how will work
// function task(callback) {
//     console.log("Beginning of task");
//     setTimeout(function() {
//         console.log("End of task");
//         callback();
//     }, 3000) // go to stil 3 second time
// }

// task(function() {
//     console.log("We will do some task.");
// })

// promification: convert acync function into promise
// let someTaskPromise = function() {
//     return new Promise(function(resolve, reject) {
//         task(resolve)
//     })
// }

// someTaskPromise();

// then(): used to deal with asynchronous tasks such as API call.
// someTaskPromise()
//     .then(function() {
//         console.log("After task is complete");
//     })

/* deferred resolve */

// function downloadPromise() {
//     return new Promise(function (resolve, reject) {
//         console.log("Starting to download the file")
//         setTimeout(function() {
//             console.log("Download is completed")
//             resolve();
//         }, 3000)
//     })
// }
// currently call the function
// downloadPromise().then(function() {
//     console.log("After download")
// })

// some time after result then so me output
// let downloadFile = downloadPromise()
// setTimeout(function() {
//     downloadFile.then(function() {
//         console.log("After download")
//     })
// }, 4000)

/* Promises */

// function download(url) {
//     return new Promise(function (resolve, reject){
//         if (!url.startsWith("http")) {
//             reject(new Error("URL does not start with http"))
//         } else {
//             console.log("Start download : " + url);
//             setTimeout(function() {
//                 let fileName = url.split("/").pop()
//                 resolve();
//             }, 3000)
//         }
//     })
// }

// function resize(fileName) {
//     return new Promise(function (resolve,  reject) {
//         if (!fileName.endsWith(".png")) {
//             reject(new Error("file is not png"));
//         } else {
//             console.log("Start resized : "  + fileName);
//             setTimeout(function() {
//                 // change x.png -> x-resized.png
//                 let resizedFile = fileName.split(".")[0] + "-resized.png";
//                 resolve(resizedFile);
//             }, 3000)
//         }
//     })
// }

// function upload(resizedFile) {
//     return new Promise(function (resolve, reject) {
//         console.log("Start upload: " + resizedFile);
//         setTimeout(function () {
//             let uploadURL = "http://imgur.com/" + resizedFile;
//             resolve(uploadURL);
//         }, 3000)
//     })
// } 

// download('http://cb.lk/logo.png')
//     .then(resize)
//     .then(upload)
//     .then(function(uploadedURL) {
//         console.log("File was uploaded to : " + uploadedURL);
//     })
//     .then(function(resizedFile) {
//         console.log("Resized file is at: " + resizedFile)
//     })
//     .catch(function(err) {
//         console.error(err)
//     })

/* Promise all */

// array of three promises all runs parallel
// Promise.all([
//     download('http://cb.lk/logo.png'),
//     download('http://cb.lk/banner.png'),
//     //download('ftp://cb.lk/banner.png'),
//     download('http://cb.lk/promo.png')
// ]).then(function (values) {
//     console.log(values);
//     // return Promise.all(values.map(resize))
// }).then(function (values){
//     console.log(values);
// }).catch(function (err) {
//     console.error(err);
// })


/*************************************************************************************************************************** */




