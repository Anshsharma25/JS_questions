// Write a C program to remove first occurrence of a word from string.
let l = "max p aai suriyavanshamn this this";
let s=""
function first_occ(l, word) {
    
    let v = l.split(" ")
    // console.log(v)
    for (let i = 0; i < v.length; i++) {
        if (v [i] != word) {
            // console.log(i)
            s = s +" "+ v[i]
            
        }
    }
    return s
}
console.log(first_occ(l, 'aai'));