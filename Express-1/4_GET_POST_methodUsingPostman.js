const { query } = require('express')
const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h1 style="color: red;">Hello World</h1>')
})

app.get('/greet', (req, res) => {
    let person = 'Guest'
    if (req.query.person) 
        person = req.query.person
    res.send('Good Morning ' + person)
})

app.post('/greet', (req, res) => {
    let person = 'Guest'
    console.log(req.body) // It value is undefined 
    if (req.body.person) 
        person = req.body.person
    res.send('Good Evening ' + person)
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/3_Form_Submission.html');
})

app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})
