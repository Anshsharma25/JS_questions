// Write a C program to remove last occurrence of a word in given string.
let l = "max p aai suriyavanshamn this this";
let s=""
function first_occ(l, word) {
    let v = l.split(" ")
    console.log(v)
    for (let i=v.length-1; i>-1; i--) {
        if (v[i]!== word) {
            s = s +" "+ v[i]
        }
    }
    return s
}
console.log(first_occ(l, 'this'));