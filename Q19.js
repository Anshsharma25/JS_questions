// Write a C program to find highest frequency character in a string.
let a = "abckkdbk dbb dkwkddkslekkd sdd sddd";

function highest_freq(a) {
    let max = 0
    let maxchar = ""
    for (let i = 0; i < a.length; i++) {
        let elem = a[i]
        let count = 0
        for (let j = 0; j < a.length; j++) {
            if (a[j] == elem) {
                count++
            }
        }
        if (count > max) {
            max = count
            maxchar = elem
        }
    }
    return `${maxchar} occoured ${max} times`
}
console.log(highest_freq(a))

