const student = {
    name: "balaram",
    sclass: "bachelors",
    rollno: 12
}
// 1 a 
const property = Object.keys(student)
console.log(property)

//  1 b 
const deleted = property.pop()
console.log(deleted);
console.log(property);
// 1 c 
const propertyLength = Object.keys(student).length
console.log(propertyLength)

