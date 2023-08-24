// problem 1 : convert inch to feet
function inchToFeet(inch) {
    const feet = inch / 12
    return feet
}
let fuadFeet = inchToFeet(60)
console.log(fuadFeet)


// problem 2 : convert miles to kilometers
function milesToKm(miles) {
    const km = miles * 1.60934
    return km
}
let miles = milesToKm(2)
console.log(miles)


// problem 3 : check even or odd
function checkEven(n) {
    if (n % 2 === 0) return true
    else return false
}
console.log(checkEven(98))
console.log(checkEven(117))


// problem 4 : check leap year
function checkLeapYear(year) {
    if (year % 400 === 0) console.log('leap year')
    else if (year % 4 === 0 && year % 100 !== 0) console.log('leap year')
    else console.log('not leap year')
}

checkLeapYear(2022)
checkLeapYear(2020)
checkLeapYear(2019)


// problem 5 : Calculate Sum of all numbers of an array
let arr = [5, 6, 7, 8, 4] 
var sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)


// problem 6 : Calculate sum of all odd numbers of an array
function calculateOddSum(num) {
    var sum = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            sum += num[i]
        }
    }
    return sum
}

let num = [5, 6, 7, 8, 4, 3] 
var sum = calculateOddSum(num)
console.log(sum)


// problem 7 : factorial 
function calculateFactorial(n) {
    let fact = 1
    for (var i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}
let factorial = calculateFactorial(5)
console.log(factorial)