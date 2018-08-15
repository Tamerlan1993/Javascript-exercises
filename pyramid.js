function pyramid(n) {
    for (let l = 1; l <= n; l++) {
        let word=[];
        for(let k=0;k<n-l;k++){
            word.push('_')
        }
        for(let k=0;k<(2*l)-1;k++){
            word.push('#')
        }
        for(let k=0;k<n-l;k++){
            word.push('_')
        }
        console.log(word.join(''));
        
    }
}

pyramid(3)