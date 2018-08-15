function anagrams(str1, str2) {
  let str1Arr = str1.match(/[a-zA-Z]+/g);
  let str2Arr = str2.match(/[a-zA-Z]+/g);

  let joinedStr1 = str1Arr
    .join("")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let joinedStr2 = str2Arr
    .join("")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  console.log(joinedStr1, joinedStr2);
  return joinedStr1 == joinedStr2;

}

console.log(anagrams("fairy tales!", "SAFETY, rail"));
