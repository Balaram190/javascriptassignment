function vowelCount(str) {
    var vowelList = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str.length; x++) {
        if (vowelList.indexOf(str[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowelCount("The quick brown fox"));