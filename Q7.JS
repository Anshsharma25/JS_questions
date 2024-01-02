//Write a C program to count total number of vowels and consonants in a string
let str = "aaaaaa1111aaa"
function count_b(str){
    let vowel = 0;
    let consonants = 0;

    for(let char of str){
        if (char.match(/[aeiou]/)){
            vowel++
        }else{
            consonants++
        }
    }
    return {vowel , consonants}
}
console.log(count_b(str));
console.log(str.length);