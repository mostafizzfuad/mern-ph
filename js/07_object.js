// object : object holo akta variable, ja onk gulo value dharon korte pare.. 

var student = {
    // key : value
    // property : value
    id : 247,
    stdName : 'Mostafizur Rahman',
    section : 7,
    marks : 98,
    age : 25
} 

console.log(student)



// access object property (dot notation) => objectName.propertyName 
console.log(student.stdName)
console.log(student.marks)


// access object property (array notation) => objectName['propertyName']
console.log(student['id'])


var propertyName = 'section'
var propertyValue = student[propertyName]
console.log(propertyValue)



// re-assign
student.section = 5 // re-assign using dot notation
student['marks'] = 100 // re-assign using array notation

var propertyName = 'age' // re-assign using variable name
student[propertyName] = 26

console.log(student)


console.log()


var keys = Object.keys(student) // return propertyName into an array
console.log(keys)

var values = Object.values(student) // return propertyValue into an array
console.log(values)

// var keys = [ 'id', 'stdName', 'section', 'marks', 'age' ]
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i]
    var propertyValue = student[propertyName]
    console.log(propertyName, propertyValue)
}

console.log()

// easy version using: for in loop
for (var propName in student) {
    const propValue = student[propName]
    console.log(propName, propValue)
}



// array vs object
var age = [25, 20, 10, 30]
var person = {
    masud : 25,
    siam : 20,
    junnun : 10,
    fuad : 30
}