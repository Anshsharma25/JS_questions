// Write a C program to find reverse of a string
let a = "anshsharma";

function reverse(a){
    s = "";
    for(let i= a.length-1; i>=0; i--){
        s += a[i];
    }return s;
}
console.log(reverse(a))