function reverseNum(n) {
    let r = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(r);

}

const output = reverseNum(15666)
console.log(output);

