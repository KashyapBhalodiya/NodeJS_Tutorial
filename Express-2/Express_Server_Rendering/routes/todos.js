const route = require('express').Router()

let todos = [
    {
        task: "This is a first task"
    },
    {
        task: "This is another task"
    }
]

route.get('/', function(req, res) {
    res.render('todos', {todos})
})

route.post('/', function(req, res) {
    todos.push({
        task: req.query.newTodo
    })
    res.redirect('todos')
})


module.exports = route