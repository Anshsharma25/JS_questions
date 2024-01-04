// Write a C program to find first occurrence of a word in a given string.
let text = "mac os window any think";
function first_occ(text, word){
    let v = text.split(" ");
    for(let i = 0; i<v.length; i++){
        if(v[i]==word ){
            return i

        }
    }
}
console.log(first_occ(text , 'any'));