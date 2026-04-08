let N = parseInt(prompt("Enter N"));
let K = parseInt(prompt("Enter K"));

let ans = -1;

for (let X = 0; X <= 100000; X++) {
    let num = N + X;

    let str = num.toString();
    let rev = str.split("").reverse().join("");

    if (str === rev && num % K === 0) {
        ans = X;
        break;
    }
}

alert(ans);