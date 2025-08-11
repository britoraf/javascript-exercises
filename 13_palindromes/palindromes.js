const palindromes = function (string) {
    let stringLowerCase = string.toLowerCase();
    let noAlphaNumRemoval = stringLowerCase.replace(/[^a-z0-9]/g,"");
    let stringArray = noAlphaNumRemoval.split("");
    let stringReversed = [];
    let isPalindrome = false;

    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed.push(stringArray[i]);
    }

    if (stringReversed.join("") === stringArray.join("")) {
        isPalindrome = true;
    } else {
        return isPalindrome;
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
