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

// Not working code
async function task() {
    await halloSayer(3, 'Dhoni')
    await helloSayer(2, 'Ashvin')
    await helloSayer(1, 'Jadeja')
}

task()

module.exports = {
    helloSayer
}