"use strict";
/**
 * @param {string} str
 * @return {boolean}
 */
// using reverseString functions in reverseString folder
// function palindrome(str:string):boolean {
//     let reversed=str.split('').reverse().join('')
//     return str===reversed;
// }
var palindrome = function (str) {
    return str.split('').every(function (el, index, arr) {
        return el === arr[arr.length - (index + 1)];
    });
};
console.log(palindrome("abba") === true);
console.log(palindrome("abcdefg") === false);
