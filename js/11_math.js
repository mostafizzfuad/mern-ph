console.log(Math.pow(2, 3))
console.log(Math.abs(-5))

console.log(Math.round(3.51)) // nearest integer number
console.log(Math.round(3.49))

console.log(Math.ceil(8.21))
console.log(Math.floor(8.96))

console.log(Math.random())
console.log(Math.round(Math.random() * 50))

console.log(Math.PI)
console.log(Math.max(50, 20, 30, 80))
console.log(Math.min(50, 20, 30, 80))

console.log()



// problem : swapping two numbers (approach 1 : temp variable)
let first = 10
let second = 20
console.log(first , second)

let temp = first
first = second
second = temp
console.log(first , second)

// problem : swapping two numbers (approach 2 : destructuring)
let one = 100
let two = 200
console.log(one, two);

[one, two] = [two, one]
console.log(one, two)


// problem : swapping two numbers (approach 3 : equation)
let a = 500
let b = 600
console.log(a, b)

a = a + b
b = a - b
a = a - b
console.log(a, b)