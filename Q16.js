// Write a C program to find last occurrence of a character in a given string.
let text = ("Hello world, welcome to the universe.");
function last_occ(text, char) {
    for (let i = text.length; i > -1; i--) {
        if (text[i] == char) {
            return i
        }
    }
}
console.log(last_occ(text, 'd'));