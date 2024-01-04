let str = "you can achieve this by";

function replace_first(str, oldChar, newChar){
    let r = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == oldChar){
            r += newChar; 
            continue
        }
        r += str[i]
    }
    return r;
}
console.log(replace_first(str, 'a', 'm')); 
