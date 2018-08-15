function fib(num) {
    let fibArr=[0,1];
    for (let k = 0; k < num; k++) {
        fibArr.push(fibArr[k]+fibArr[k+1])
    }
    console.log(fibArr[num]);
}


console.log(fib(4));