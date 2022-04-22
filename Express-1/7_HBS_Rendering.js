// creating HBS Rendering using Todo List example

// npm install hbs

const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')

let tasks = [
    'sample task'
]

app.get('/', (req, res) => {
    res.render('7_HBS_Rendering', {
        title: 'Todo List',
        tasks
    })
})

app.post('/', (req, res) => {
    // res.send('new task added =' + req.body.newtask)
    tasks.push(req.body.newtask)
    res.redirect('/')
})

app.listen(5555, () => {
    console.log('server started on http://localhost:5555')
})