// function longestWord(sen) {
//     let arr = sen.replace(/[, ]+/g, " ").trim().split(" ");
//     let longWord = arr[0];
//     for (let k = 1; k < arr.length; k++) {
//         if (longWord.length < arr[k].length) {
//             longWord = arr[k];
//         }
//     }
//     return longWord
// }

// function longestWord(sen) {
//     let arr = sen.replace(/[, ]+/g, " ").trim().split(" ");
//     let sorted = arr.sort((a, b) => {
//         return b.length - a.length;
//     })
//     return sorted[0];
// }

function longestWord(sen) {
    let arr = sen.replace(/[, ]+/g, " ").trim().split(" ");
    return arr.reduce((word,arrItem)=>{
        if(word.length<arrItem.length){
            return arrItem;
        }
        else
        return word;
    },'')
}
console.log(longestWord('Hello this is awesome'));