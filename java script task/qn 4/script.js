function findMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function (props) {
        return typeof obj[props] == "function";
    });
}

console.log(findMethods(Number));
console.log(findMethods(Math));
console.log(findMethods(Array));
console.log(findMethods(Date));
