// Write a C program to check whether a string is palindrome or not.
let s = "NITIN";

function check_palindrome(s) {
    let v = "";
    for (let i = s.length - 1; i > -1; i--) {
        v = v + s[i]
    }
    if (v == s) {
        return "  it is palindrome"
    }
    else {
        return " it is not palindrome"
    }
}

console.log(check_palindrome(s))