// Write a C program to find last occurrence of a word in a given string.

let text = "mac os window any things";
function first_occ(text, word){

    let v = text.split(" ");
    console.log(v)
    for(let i = v.length ; i>-1 ; i--){
        if(v[i]==word ){
            return i
        }
    }
}
console.log(first_occ(text , 'things'));