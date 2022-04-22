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
    await Promise.all([
        helloSayer(3, 'Dhoni'),
        helloSayer(1, 'Kohli'),
        helloSayer(2, 'Tendulakar'),
        helloSayer(4, 'Rahul')
    ])

    console.log('--------- First Batch -------------')

    await Promise.all([
        helloSayer(4, 'Nora'),
        helloSayer(2, 'Kush'),
        helloSayer(1, 'Kevin'),
        helloSayer(2, 'Rollins')
    ])
}

task()

module.exports = {
    helloSayer
}