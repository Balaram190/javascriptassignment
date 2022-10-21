const stringCombination = (str) => {
    var len = str.length;
    var currentIndex = 0;
    var result = [];

    while (currentIndex < len) {
        var char = str.charAt(currentIndex);

        console.log(char);
        var tempArr = [char];

        for (let x in result) {
            tempArr.push("" + result[x] + char)

        }
        result = result.concat(tempArr);

        currentIndex++
    }
    return result
}
console.log(stringCombination("dog"));