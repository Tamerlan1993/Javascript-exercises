function reverseInteger(int) {
    let str = Math.abs(int).toString();
    let sign=Math.sign(int);
    let reversedStr=str.split('').reverse().join('')
    let reverseInt=parseFloat(reversedStr);
    return sign*reverseInt;
}
console.log(reverseInteger(15) === 51)
console.log(reverseInteger(981) === 189)
console.log(reverseInteger(500) === 5)
console.log(reverseInteger(-15) === -51)
console.log(reverseInteger(-90) === -9)