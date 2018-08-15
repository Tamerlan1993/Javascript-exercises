function chunk(array, size) {
    let chunkedArr=[];
    for (let k = 0; k < array.length; k=k+size) {
        let sliced=array.slice(k,k+size)
        chunkedArr.push(sliced);
    
    }
    return chunkedArr;
}

console.log(chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]])
console.log(chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]])
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]])
console.log(chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]])
console.log(chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]])


