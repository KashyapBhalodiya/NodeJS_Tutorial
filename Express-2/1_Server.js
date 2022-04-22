const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    let name = 'Guest'
    if (req.query.user) {
        name = req.query.user;
    }
    res.send('Hello world ' + name)
})

app.use('/path', express.static(__dirname + '/public')) // to get current folder path name use __dirname
// console.log(__dirname + '/public');
// write in the web browser /path/a.html
// we create a index.html file so this is default file to open the folder

app.listen(4321, () => {
    console.log('server started on http://localhost:4321')
})

