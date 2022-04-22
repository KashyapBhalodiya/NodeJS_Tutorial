// Fast, unopinionated, minimalist web framework for node.
/*
    Create a repo
    npm init
    npm install express

*/

const express = require('express');
console.log(typeof express)
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
    res.send('<h1 style="color: red;">Hello world</h1>')
})

app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})