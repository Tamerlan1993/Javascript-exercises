function steps(num) {
    let output="#"
    while(num){
        console.log(output.padEnd(num," "));
        output+="#";
        num--;
    }
}

function steps1(num) {
    let output="#"
    let space=" ";
    let word=''
    let count=1;
    while(num){
        word=output.repeat(count);
        word+=space.repeat(num-1)
        console.log(word);
        num--;
        count++;
        word='';
    }

}


steps1(5)