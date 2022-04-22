const { query } = require('express')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1 style="color: red;">Hello World</h1>')
})

app.get('/greet', (req, res) => {
    // console.log(req.url)
    // console.log(req.headers)

    let person = 'Guest'
    if (req.query.person) 
        person = req.query.person
    res.send('Good Morning ' + person)
})

app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})
