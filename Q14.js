// Write a C program to reverse order of words in a given string.
let s = ["i", "like", "this", "program", "very", "much"];
                                         
let ans ="";
for (let i = 5; i >= 0; i--)
{
    ans += s[i];
}
console.log(ans.slice(0,ans.length-1));