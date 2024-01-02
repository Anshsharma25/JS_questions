// Write a C program to count occurrences of a character in given string.// 
let text = ("Hello world, welcome to the universe.");

function all_occ(text,char){
    let count = 0;
    console.log(text)
    for(let i =0; i<text.length;i++){
        if(text[i] == char){
            count += 1
        } 
    }
    return count
}
console.log(all_occ(text,'w'));