// convert the string into the lowercase to upper case 
let a = "anshsharma";
let v = "";
for(let i in  a){
    // console.log( a.codePointAt(i))
    v += String.fromCharCode(a.codePointAt(i)-32)
}

// console.log(a.codePointAt(0))
console.log(v);





