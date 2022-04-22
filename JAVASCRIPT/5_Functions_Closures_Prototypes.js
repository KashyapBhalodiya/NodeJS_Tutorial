//----------------------- Closure -------------------------------

function outer(arg1) {
    let var1 = 10
    let x = 10
    
    function inner(arg2) {
        let var2 = 20
        let x = 20
        console.log(arg1, var1, arg2, var2, x)
        console.log(arguments[0])
    }
  
    return inner
    // return 10
}
  
let x = outer('param1', 11)
  
  // typeof x == 'function'
  // x == inner
  
  // scope of arg1 and var1 are from lines 2 to 10
  
x('param2')


// ------------------   Equality ----------------------------------
console.log(1 == '1') // true
console.log(1 === '1') // false

// peculiar cases 

console.log(0 == '') // true, because Number('') == 0

console.log('false' == false) // false

console.log('' == false) // true, both typecast to 0

// this doesn't hold good for abstract equality 
// a = b,  b = c  ... implies that .. a = c

console.log([1,2] == [1,2]) // false


// -----------------  prototype based inheritance ---------------------

let obj1 = {
    a: 10,
    b: 20, 
    c: 30
}

let obj2 = Object.create(obj1)
obj2.p = 'adg'
obj2.q = 'dgn'
obj2.r = 'dfn'

let obj3 = Object.create(obj2)

// obj3.__proto__ == obj2
// obj3.__proto__.__proto__ == obj1

/* 
    obj2.a -> it will try to find a in obj2
        -> if not found, 
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on... 
        -> till .__proto__ becomes null
*/

// ------------------ String Literals -------------------------------
let s1 = 'He said, "This is is awesome!"'

let s2 = "He said, \"This is is awesome!\""

let s3 = "He said, 'This is is awesome!'"

let s4 = `He said, 'This is is awesome!'`

let s5 = "This string is \n in multiple lines"

let s6 = `
    This string
    is in multiple lines
`

let name = 'John'

let g1 = 'Good Morning ' + name

let g2 = `Good Morning ${name}`

let s7 = `10 + 2 = ${10 + 2}`

// -------------------- this ---------------------------------------
// Answer in context of C++/Java
// What does the keyword "this" mean, what does it refer to ?
// In which places in code can we NOT use "this" ?

function checkThis() {
    console.log(this)
}
  
    let obj = {
        "a": 10,
        b: 'asdsa',
        c: true,
        d: function () {
            console.log(this)
        },

    10: 32246,
    true: 'asdasd',
    e: {
        l: 234,
        m: 'sdgsdg',
        n: function () {
            console.log(this)
        },
    },
}