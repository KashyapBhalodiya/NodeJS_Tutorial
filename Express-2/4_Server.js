const express = require('express')
const app = express();
const todoRoute = require('./routes/todos')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/hello', function(req, res) {
    res.send("Hello")
})

app.use("/public2", express.static(__dirname + "/public2")) // it makes the public2 folder in static websites
// static webiste: It contains web pages with fixed content coded in HTML and stored on a web server. It does not change, it stays the same, or "static" for every viewer of the site.

app.use('/todos', todoRoute)

app.listen(4567);