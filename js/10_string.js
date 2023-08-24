// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// string : sequence of characters and immutable (unchanging : index define kore string er char change / re-assign kora jaina)

// string.toLowerCase()
// string.toUpperCase()


// includes() 
const myName = 'mostafizur rahman fuad'

const isExist = myName.includes('fuad')
console.log(isExist)

const isExists = myName.includes('Fuad')
// const isExists = myName.includes('Fuad'.toLowerCase())
console.log(isExists)



// indexof()
const isSearch = myName.indexOf('rahman') // 11
// const isSearch = myName.indexOf('Rahman') // -1
console.log(isSearch)

if (myName.indexOf('rahman') !== -1) {
    console.log('exist')
} else {
    console.log('not exist')
}


// startsWith()
console.log(myName.startsWith('mostafizur'))
console.log(myName.startsWith('rahman'))

console.log()

// endsWith()
console.log(myName.endsWith('fuad'))
console.log(myName.endsWith('rahman'))


// split()
const lyrics = 'tumi bondhu kala pakhi ami jeno ki'
console.log(lyrics.split(' '))
console.log(lyrics.split('.'))
console.log(lyrics.split('')) // char wise

// slice()
console.log(lyrics.slice(5, 8)) // 5 theke start, 8 er ag porjonto

// substring() : same as slice()
console.log(lyrics.substring(5, 8)) // 5 theke start, 8 er ag porjonto


// trim()
const greetings = '   hello world !!    '
console.log(greetings)
console.log(greetings.trim())
console.log(greetings.trimStart())
console.log(greetings.trimEnd())

console.log()

// concat()
const str1 = 'Hello'
const str2 = 'World'
console.log(str1 + str2)
console.log(str1.concat(str2))
console.log(str1.concat(' ', str2))
console.log(str1.concat(' BD'))


// join()