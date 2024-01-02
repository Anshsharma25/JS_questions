3// Write a C program to find total number of alphabets, digits or special character in a string.


function countstring(str){
    let alphabets = 0;
    let digits = 0;
    let special = 0;
    for (let char of str){
        if (char.match(/[a-zA-Z]/)){
            alphabets++;
        }else if (char.match(/[0-9]/)){
            digits++
        }
        else{
            special++;
        }
    }
    return { alphabets, digits, special };
}
let str = "anshhsarma893#$@iai3498(#9#$*#*";
console.log(countstring(str))
