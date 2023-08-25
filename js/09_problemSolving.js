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


// problem 8 : large between two numbers
// problem 9 : large between three numbers

// problem 10 : find the max number in an array
function findMaxNumber(numbers) {
    let mx = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > mx) {
            mx = numbers[i]
        } 
    }
    return mx
}

const heights = [60, 50, 180, 200, 40]
const tallest = findMaxNumber(heights)
console.log(tallest)

// problem 11 : find the min number in an array

// problem 12 : reverse a string (characters)
function reverseString(text) {
    let reversed = ''
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i]
    }
    return reversed
}

const myString = 'I am a good person'
const reversed = reverseString(myString)
console.log(reversed)


// problem 13 : reverse a words
function reverseWords(s) {
    const words = s.split(' ')
    const result = []
    // [ 'I', 'am', 'a', 'good', 'person' ]
    for (let i = words.length - 1; i >= 0; i--) {
        result.push(words[i])
    }
    const rev = result.join(' ')
    return rev
}

const str = 'I am a good person'
const rev = reverseWords(str)
console.log(rev)


// problem 14 : fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
const fibo = [0, 1]
for (let i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
console.log(fibo)



// problem 15 : একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
function bestFriend(friendsName) {

    let mxx = friendsName[0].length
    let mxIndex = 0
    for (let i = 1; i < friendsName.length; i++) {

        if (mxx < friendsName[i].length) {
            mxx = friendsName[i].length 
            mxIndex = i
        }

    }

    return friendsName[mxIndex]

}

let friendsName = ['masud', 'musfiqur', 'siam', 'mostafizurRahman', 'dani']
let bestFriendName = bestFriend(friendsName)
console.log(bestFriendName)




// problem 16 : Remove duplicate items from an array

function removeDuplicates(names) {
    const unique = []
    for (let i = 0; i < names.length; i++) {
        if (unique.includes(names[i]) === false) {
            unique.push(names[i])
        } 
    }
    return unique
}

const names = ['fuad', 'junnun', 'siam', 'mostafizur', 'fuad', 'siam', 'rasel', 'fuad']
const uniqueNames = removeDuplicates(names)
console.log(uniqueNames)



// problem 17 : suppose you have 1 - 30 numbers. if a number divisible by 3, then print 'hello'. if a number divisible by 3, then print 'world'. if the number divisible by 3 and 5 both print 'hello world'.

for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('hello world')
    else if (i % 3 === 0) console.log('hello')
    else if (i % 5 === 0) console.log('world')
    else console.log(i)
}






