function getDigit(i, num) {

    return parseInt((parseInt(num) / (10 ** (i - 1))) % 10);
}

function isDigitsZero(num) {
    var length = num.toString().length;

    for (var i = 1; i < length; i++) {
        if (num.toString().charAt(i) != 0) {
            return false;
        }
    }
    return true;
}


function convertFromNumberToQuantitative(num) {
    var tp = [" yüz", " min", " milyon", " milyard", " trilyon", " trilyard"];
    var dec = ["", " bir", " iki", " üç", " dörd", " beş", " altı", " yeddi", " səkkiz", " doqquz"];
    var ten = ["", " on", " iyirmi", " otuz", " qırx", " əlli", " altmış", " yetmiş", " səksən", " doxsan"];
    var text = "";
    var length = num.toString().length;
    if (num == 0) {
        return "sıfır";

    }

    for (i = length; i > 0; i--) {
        var digit = getDigit(i, num);
        if (i % 3 == 0) {
            if (digit == 0) {
                text += "";
            } else if (digit == 1) {
                text += tp[0];
            } else {
                text += dec[digit] + tp[0];

            }
        } else if (i % 3 == 1) {
            if (i > 3 && !getDigit(i, num) && !getDigit(i + 1, num) && !getDigit(i + 2, num)) {
                text += "";
            } else if (i > 3) {
                if (digit == 1 && (isDigitsZero(num) || length == 4)) {
                    text += tp[Math.floor(i / 3)];
                } else {
                    text += dec[digit] + tp[Math.floor(i / 3)];
                }

            } else {
                text += dec[digit];
            }
        } else if (i % 3 == 2) {
            if (digit == 0) {
                text += "";

            } else {
                text += ten[digit];
            }
        }
    }
    console.log(text);
}

convertFromNumberToQuantitative(108)