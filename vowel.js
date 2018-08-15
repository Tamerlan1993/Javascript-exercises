// function vowels(str) {
//     let vowelArr = 'aeiou'.split('');

//     let vowelCounter = 0;
//     let strArr = str.toLowerCase().split('');
//     strArr.forEach(char => {
//         if (vowelArr.includes(char)) {
//             vowelCounter++;
//         }
//     });

//     console.log(vowelCounter);

// }

function vowels(str) {
    let matches = str.match(/[aeiou]/gi);
    let count = matches == null ? 0 : matches.length
    console.log(count);
}

vowels('aeiou')
vowels('Adam')
vowels('Hello there!')