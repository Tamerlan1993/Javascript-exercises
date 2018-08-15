var SUFFIX = {"frontNonRounded":'inci', "frontRounded":'üncü', "backNonRounded":'ıncı',"backRounded" :'uncu'};


var frontNonRounded = ['i','e','ə'];
var frontRounded = ['ü','ö'];
var backNonRounded = ['a','ı'];
var backRounded = ['u','o'];
var vowels = frontNonRounded.concat(frontRounded,backRounded,backNonRounded);

var suffix = '';
function convertToOrdinal(text){
  if(text == "sıfır"){
    return "sıfrıncı";
  }
  var lastWord = text.split(' ').splice(-1).join('');
  var vowel = '';
  var reversed = lastWord.split('').reverse().join('');
  for(i = 0;i < reversed.length; i++){
    if(vowels.includes(reversed.charAt(i))){
        vowel = reversed.charAt(i);
        break;
    }
  }

  if(frontNonRounded.includes(vowel)){
    suffix = SUFFIX.frontNonRounded;
  }
  else if(frontRounded.includes(vowel)){
    suffix = SUFFIX.frontRounded;
  }
  else if(backRounded.includes(vowel)){
    suffix = SUFFIX.backRounded;
  }
  else if(backNonRounded.includes(vowel)){
    suffix = SUFFIX.backNonRounded;
  }

  if(reversed.charAt(0) == suffix.charAt(0)){
    suffix = suffix.substr(1);
  }
  var ordinal = text += suffix;

  console.log(ordinal);
}

convertToOrdinal('on min bir')