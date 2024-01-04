// Write a C program to remove all occurrences of a character from string.
let v = ("hey this is ansh sharma");
let s = ""
function remove_occ(v,char){
    for(let i = 0; i<v.length; i++){
        if (v[i] !==char){
            s += v[i] 
        }
    }
    return s
}
console.log(remove_occ(v , 'a'))