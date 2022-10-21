function stringOrder(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    firstThree = (str.substring(0, 3)).toLowerCase();
    remaining = str.substring(3, str.length);
    return firstThree + remaining;
}
console.log(stringOrder("PROGRam"));
console.log(stringOrder("hi"));
