
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
    let num = await (slowMath.add(6,2) );
    console.log(num)
    let num2 = await (slowMath.multiply(num, 2))
    console.log(num2)
    let num3 = await (slowMath.divide(num2, 4))
    console.log(num3)
    let num4 = await (slowMath.subtract(num3, 3))
    console.log(num4)
    let num5 = await (slowMath.add(num4, 98))
    console.log(num5)
    let num6 = await (slowMath.remainder(num5, 2))
    console.log(num6)
    let num7 = await (slowMath.multiply(num6, 50))
    console.log(num7)
    let num8 = await (slowMath.remainder(num7, 40))
    console.log(num8)
    let num9 = await (slowMath.add(num8, 32))
    console.log(num9)
    await (console.log("The final result is: " + num9))
    await ( console.log("Job's Done Again!!"))

}

doMath()