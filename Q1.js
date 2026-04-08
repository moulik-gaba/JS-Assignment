let L = parseInt(prompt("Enter L"));
let R = parseInt(prompt("Enter R"));
let K = parseInt(prompt("Enter K"));

let count = 0;

for (let i = L; i <= R; i++) {

    if (i % K !== 0) continue;

    let num = i;
    let sum = 0;
    let hasZero = false;

    while (num > 0) {
        let digit = num % 10;

        if (digit === 0) {
            hasZero = true;
            break;
        }

        sum += digit;
        num = Math.floor(num / 10);
    }

    if (hasZero) continue;

    let isPrime = true;

    if (sum < 2) isPrime = false;

    for (let j = 2; j < sum; j++) {
        if (sum % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        count++;
    }
}

alert(count);