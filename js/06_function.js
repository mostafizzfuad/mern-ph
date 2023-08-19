function functionName() {
    console.log('Hello World')
}
functionName(); // call or invoke


// parameter
function oddCalculate(a, b) { // parameter
    console.log(a + b)
}
oddCalculate(5, 2) // arguments pass
oddCalculate(6, 9)


// NaN & Undefined
function mulCalculate(a, b) {
    console.log(a) // undefined
    console.log(b) // undefined
    console.log(a * b) // undefined * undefined = NaN
}
mulCalculate()


// return value
function subCalculate(a, b) {
    return a - b
}
console.log(subCalculate(5, 2))
 
