// Write a C program to find lowest frequency character in a string.
let a = "abckkdbk dbb dkwkddkslekkd sdd sddd";

function lowest_freq(a) {
    let min = a.length+1
    let minchar = ""
    for (let i = 0; i < a.length; i++) {
        let elem = a[i]
        let count = 0
        for (let j = 0; j < a.length; j++) {
            if (a[j] == elem) {
                count++
            }
        }
        if (count < min) {
            min = count
            minchar = elem
        }
    }
    return `${minchar} occoured ${min} times`
}
console.log(lowest_freq(a))