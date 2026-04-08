let N = parseInt(prompt("Enter N"));
let seed = parseInt(prompt("Enter seed"));

let x = N;

for (let i = 0; i < 3; i++) {
    if (x % 2 === 0) {
        x = x / 2 + seed;
    } else {
        x = x * 3 - seed;
    }
}

let s = x.toString();

if (x >= 100 && x <= 999 && s[1] == seed) {
    alert("YES, " + x);
} else {
    alert("NO, " + x);
}