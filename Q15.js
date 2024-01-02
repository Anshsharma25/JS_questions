// Write a C program to find first occurrence of a character in a given string.
let text = ("Hello world, welcome to the universe.");
function occ_first(text,char){
    console.log(text)
    for(let i =0; i<text.length;i++){
        if(text[i] == char){
            return i
        }
    }
}
console.log(occ_first(text,'o'));