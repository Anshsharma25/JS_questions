// Write a C program to search all occurrences of a word in given string.

let text = "mac os window any think if want to if if";
function first_occ(text, word){
    let v = text.split(" ");
    console.log(v.length)
    for(let i = 0; i<v.length; i++){
        if(v[i]==word ){
            console.log(i)
            // return i  
        }
    }
}
first_occ(text , 'if');