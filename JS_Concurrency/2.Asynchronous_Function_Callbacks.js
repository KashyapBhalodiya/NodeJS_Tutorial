function helloSayer(times, name, doneSaying) {
    let count = 0
    let loopId = setInterval(() => {
        count++
        console.log('Hello ' + name)
        if (count === times) {
            clearInterval(loopId)
            doneSaying()
        }
    }, 100)
}

helloSayer(3, 'kashyap', () => {
    helloSayer(2, 'krushi', () => {
        helloSayer(3, 'kush', () => {
            
        })  
    })
})

module.exports = {
    helloSayer
}