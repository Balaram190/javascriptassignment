function word(str) {
    var vowelList = 'aeiouAEIOU';
    var vcount = [];
    var nvcount = [];
    for (var x = 0; x < str.length; x++) {
        if (vowelList.indexOf(str[x]) !== -1) {
            vcount += str[x]
        }
        else {
            nvcount += str[x]
        }
    }
    const sortedv = vcount.split('').sort().join('');
    const notsortedv = nvcount.split('').sort().join('');

    return [sortedv, notsortedv]
}

console.log(word("helllo world"));

