// Write a C program to remove all occurrence of a word in given string
let l = "max p aai suriyavanshamn thi par chali nhi fer nhi chali hnji hnji dedo";
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
console.log(first_occ(l, 'nhi'));