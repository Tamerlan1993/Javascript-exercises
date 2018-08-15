function maxChar(str) {
    let charObj={};
    let arr=str.split('');
    arr.forEach(item => {
        if(charObj[item]){
            charObj[item]++;
        }
        else{
            charObj[item]=1;
        }
    });
    let max=0;
    let ch='';
    for (const item in charObj) {
        if(charObj[item]>max){
            max=charObj[item]
            ch=item;
        }
    }
    console.log(max,ch);
}


maxChar("abbcccccccd")
maxChar("apple 1231111")