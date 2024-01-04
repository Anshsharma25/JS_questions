// Write a js program to remove last occurrence of a character from string.
let s = "hey ! today is the new day ";
function removeLastOccurrence(s, char) {
    let result = "";
    let lastIndex = -1;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === char) {
            lastIndex = i;
            break;
        }
    }
    if (lastIndex !== -1) {
        for (let i = 0; i < s.length; i++) {
            if (i !== lastIndex) {
                result += s[i];
            }
        }
    } else {
        return "char does not exis"
    }
    return result;
}
console.log(removeLastOccurrence(s, "j"));

