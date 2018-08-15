"use strict";
/**
 *
 * @param {string} str
 * @return {string}
 */
// function reverseString(str: string): string {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// function reverseString(str: string): string {
//   let reverse: string = "";
//   for (const char of str) {
//     reverse = char + reverse;
//   }
//   return reverse;
// }
// function reverseString(str: string): string {
//   return str.split("").reduce((reversed: string, char: string): string => {
//     return (reversed = char + reversed);
//   }, "");
// }
function reverseString(str) {
    var newArr = [];
    for (var k = 0; k < str.length; k++) {
        newArr.push(str[str.length - k - 1]);
    }
    return newArr.join('');
}
console.log(reverseString("apple") === "elppa");
console.log(reverseString("hello") === "olleh");
console.log(reverseString("Greetings!") === "!sgniteerG");
console.log(reverseString("typescript"));
