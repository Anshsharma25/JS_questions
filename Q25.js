// Write a C program to remove all repeated characters from a given string.
let str = "JavaScript is the most popular programming language on Earth for a reason."
function repeated_char(str, char){
    let v = ""
    for(let i = 0; i < str.length; i++){
        if (str[i]!==char){
            v += str[i]
            //  we can also use this method return str.replaceAll(str[i], "")
        }
    }
    return v
}
console.log(repeated_char(str, 'o'))