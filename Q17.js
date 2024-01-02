// Write a C program to search all occurrences of a character in given string.
let text = ("Hello world, welcome to the universe.");

function all_occ(text,char){
    let s = ""
    console.log(text)
    for(let i =0; i<text.length;i++){
        if(text[i] == char){
            // return i
            s += " " +i

        } 
    }
    return s 
    
}
console.log(all_occ(text,'w'));
// console.log(all_occ(text,'w'));