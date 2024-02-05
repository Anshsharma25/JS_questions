// 39. Write a C program to trim both leading and trailing white space characters from given
//  string.
function trimWhiteSpace(inputString) {
    let trimmedString = inputString.replace(/^\s+/, '');
    trimmedString = trimmedString.replace(/\s+$/, '');

    return trimmedString;
}
let inputString = "   Hello, world!   ";
let result = trimWhiteSpace(inputString);
console.log(result);
