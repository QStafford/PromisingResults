
//Waits 1 sec and rejects negative numbers as vals
//slowMath.add(val1, val2)
// slowMath.subtract(val1, val2)
// slowMath.multiply(val1, val2)

//rejects if val2 is 0 adn negative
// slowMath.divide(val1, val2)
// slowMath.remainder(val1, val2)

// slowMath.add(6,2)
// .then(slowMath.multiply(,2))
// .then(slowMath.divide(,4))
// .then(slowMath.subtract(,3))
// .then(slowMath.add(,98))
// .then(slowMath.remainder(,2))
// .then(slowMath.multiply(,50))
// .then(slowMath.remainder(,40))
// .then(slowMath.add(,32))
// .then(console.log("The final result is: " + final))

// const done = () => console.log("Job's Done!!!")
// slowMath.add(6, 2).then((num) => {
//     console.log(num)
//     slowMath.multiply(num, 2)
//         .then((num) => {
//             console.log(num)
//             slowMath.subtract(num, 3)
//                 .then((num) => {
//                     console.log(num)
//                     slowMath.add(num, 98)
//                         .then((num) => {
//                             console.log(num)
//                             slowMath.remainder(num, 2)
//                                 .then((num) => {
//                                     console.log(num)
//                                     slowMath.multiply(num, 50)
//                                         .then((num) => {
//                                             console.log(num)
//                                             slowMath.remainder(num, 40)
//                                                 .then((num) => {
//                                                     console.log(num)
//                                                     slowMath.add(num, 32)
//                                                         .then((num) => {
//                                                             console.log(num)
//                                                             console.log("The final result is: " + num)
//                                                             done()
//                                                         })
                                                        
//                                                 })
//                                         })
//                                 })
//                         })
//                 })
//         })

// }).catch ((err) => {
//     console.log(err)
// })

async function doMath() {
    const done = () => console.log("Job's Done Again!!")
    console.log(done())
}

doMath()