// 40. Write a C program to remove all extra blank spaces from given string.
function removeExtraSpaces(inputString) {
    let cleanedString = '';
    let spaceFound = false;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ') {
            cleanedString += inputString[i];
            spaceFound = false;
        } else {
            if (!spaceFound) {
                cleanedString += inputString[i];
                spaceFound = true;
            }
        }
    }
    if (cleanedString[0] === ' ') {
        cleanedString = cleanedString.substring(1);
    }
    
    return cleanedString;
}
let inputString = "   Hello,    world!   This    is a  test.   ";
let result = removeExtraSpaces(inputString);
console.log(result);
