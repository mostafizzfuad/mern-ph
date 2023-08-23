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
console.log(subCalculate(25, 2))
 


// problem : write a function called makeAvg() which will take an array of integers and the size of that array and return the average of those values..

function makeAvg(arr, size) {
    if (size === 0) return 0

    let sum = 0
    for (let i = 0; i < size; i++) {
        sum += arr[i]
    }

    const avg = sum / size
    return avg
}

const array = [1, 2, 3, 4, 5]
const size = array.length
const result = makeAvg(array, size)
console.log(result)


/****** প্রাকটিস চ্যালেঞ্জ-৩ টা: 

১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

৩. এমন একটা ফ্যাংশন লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
 
 ****************************/