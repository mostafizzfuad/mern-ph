var friendsAge = [10, 25, 21, 30, 40]
var friendsName = ['shuvo', 'siam', 'rifat', 'walid', 'bappy']

console.log(friendsName)
console.log(friendsAge)
console.log(friendsAge.length) // length of an array

console.log(typeof friendsName) // object
console.log(Array.isArray(friendsName)) // true (it's array)

// get element by index
console.log(friendsName[1])

// re-assign value
friendsAge[2] = 50
console.log(friendsAge)

// find index of an element
console.log(friendsName.indexOf('walid'))
console.log(friendsName.indexOf('sakib')) // sakib don't exist in this array .. so, return -1

// push : add element in the end
friendsAge.push(60)
console.log(friendsAge)

// pop : remove element from the end
var popElement = friendsAge.pop()
console.log(friendsAge)
console.log(popElement)


// unshift : add element in the first
// shift : remove element from the first

// slice()
var number = [10, 20, 30, 40, 55, 57, 88, 42]
console.log(number.slice(2,5))  // slice(kotoIndexThekeShuru, kotoIndexErAgePorjonto)

// includes() : array te element ta ache naki nei ?
var myName = 'My name is Fuad'
console.log(myName.includes('is')) // true
console.log(myName.includes('has')) // false

// substring()
console.log(myName.substring(0, 7))


// join() 
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


// concat 
let arrOne = [20, 30, 40, 25, 10, 60, 55]
let arrTwo = [5, 7, 6, 100, 61, 42, 59, 84]
let arrResult = arrOne.concat(arrTwo)
console.log(arrResult)


// includes
if (arrOne.includes(30) !== -1) {
    console.log('30 is an element of array')
} else {
    console.log('30 is not an element of array')
}


// slice()
console.log(arrOne.slice(2, 5)) // 2 er age katchi + 5 er age katchi
console.log(arrOne) // don't change main array



// splice(start, deleteCount, insertItems)
console.log(arrOne.splice(2, 3)) // 2 index theke 3 ta element ke splice kora hoyece
console.log(arrOne) // change main array

console.log()

console.log(arrTwo)
let resArr = arrTwo.splice(2, 3, 200, 300, 400)
console.log(resArr)
console.log(arrTwo) 


// splice(start, deleteCount, insertItems)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


