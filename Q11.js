// Write a C program to count total number of words in a string.

let str = "this is ansh sharma now I am solving in the JS question "

function count_str(){
    word = 0

    for(let char of str ){
        if (char.match(/[end = " "]/)){
            word++;
        }else{
            word++;
        }
    }
    return {word , i};

}console.log(count_str(str));