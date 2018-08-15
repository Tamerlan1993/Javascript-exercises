// function fizzbuzz(num) {
//     for (let k = 1; k < num; k++) {
//         if (k % 3 == 0 && k % 5 != 0) {
//             console.log('fizz');
//         } else if (k % 5 == 0 && k % 3 != 0) {
//             console.log('buzz');
//         } else if (k % 15 == 0) {
//             console.log('fizzbuzz');
//         } else {
//             console.log(k);
//         }
//     }
// }

function fizzbuzz(n) {
    let output='';
    for (let k = 1; k < n; k++) {
        if(k%3==0){
            output+='fizz'
        }
        if(k%5==0){
            output+='buzz'
        }
        console.log(output || k);
        output='';
    }
}

fizzbuzz(45);