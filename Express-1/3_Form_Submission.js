const { query } = require('express')
const express = require('express')

const app = express()

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
    // console.log(req.body) // It value is undefined 
    if (req.query.person) 
        person = req.query.person
    res.send('Good Morning ' + person)
})

app.get('/form', (req, res) => {
    // res.send(`
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    //     <script src="3_Form_Submission.js">
            
    //     </script>
    // </head>
    // <body>
    //     <input>
    //     <input>
    //     <button type="submit">Submit</button>
    // </body>
    // </html>
    // `)

    // Instead of writing hole code we are use sendfile()
    res.sendFile(__dirname + '/3_Form_Submission.html');
})

app.listen(4444, () => {
    console.log('server started on http://localhost:4444')
})
