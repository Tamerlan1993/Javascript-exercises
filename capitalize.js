function capitalize(str) {
    let arr = str.split("")

    for (let k = 0; k < arr.length; k++) {

        if (arr[k].match(/[a-z]/i) && (arr[k - 1] == undefined || arr[k - 1].match(/[\s:,;!]/))) {
            arr[k] = arr[k].toUpperCase();
        }

    }
    return arr.join("");
}

console.log(capitalize('a short; sentence') === 'A Short; Sentence')
console.log(capitalize('a :lazy fox') === 'A :Lazy Fox')
console.log(capitalize('look, it is working!') === 'Look, It Is Working!')