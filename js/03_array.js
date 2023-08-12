var friendsAge = [10, 25, 21, 30, 40]
var friendsName = ['shuvo', 'siam', 'rifat', 'walid', 'bappy']

console.log(friendsName)
console.log(friendsAge)
console.log(friendsAge.length) // length of an array

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








