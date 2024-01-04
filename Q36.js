// Write a C program to trim leading white space characters from given string.
let text = "       Ansh sharma    is very        ";
function trim_lead(text){
    let s = ""
    for(let i = 0; i<=text.length-1; i++){
        if(text[i]!==" "){
            s += text[i] 
        }
    }
    return s
}
console.log(trim_lead(text))