function helloSayer(times, name) {
    let count = 0
    let loopId = setInterval(() => {
        count++
        console.log('Hello ' + name)
        if (count === times) {
            clearInterval(loopId)
        }
    }, 100)
}

helloSayer(3, 'kashyap')
helloSayer(2, 'krushi')

module.exports = {
    helloSayer
}