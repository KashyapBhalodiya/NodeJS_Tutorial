function helloSayer(times, name) {
    return new Promise((resolve, reject) => {
        let count = 0
        let loopId = setInterval(() => {
            count++
            console.log('Hello ' + name)
            if (count === times) {
                clearInterval(loopId)
                resolve()
            }
        }, 100)
    })
}

helloSayer(3, 'kashyap')

.then(() => {
    helloSayer(2, 'vasu')
})

.then(() => helloSayer(2, 'kush'))

// Concurrent
helloSayer(3, 'Concurrent')
.then(helloSayer(2, 'Modi'))
.then(helloSayer(3, 'Kejrival'))

// Sequentially
helloSayer(3, 'sequentially')
.then(() => helloSayer(2, 'Rahul'))
.then(() => helloSayer(4, 'Kohli'))

module.exports = {
    helloSayer
}