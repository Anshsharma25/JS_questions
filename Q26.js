// Write a C program to replace last occurrence of a character with another in a string.
let inputString = "hello world this is ansh i dont wanna gooo their ";
function replaceLastOccurrence(inputString, targetChar, replacementChar) {    
    let strArray = inputString.split('');
    let lastIndex = -1;
    for (let i = strArray.length - 1; i >= 0; i--) {
        if (strArray[i] === targetChar) {
            lastIndex = i;  
        }
    }
    if (lastIndex !== -1) {
        strArray[lastIndex] = replacementChar;
    }
    let resultString = strArray.join('');
    return resultString;
}
let result = replaceLastOccurrence(inputString, "i", "x");
console.log(result);

