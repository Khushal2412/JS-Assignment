let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));
let count = 0;

for (let x = L; x < R; x++) {
    if (x % K === 0) {
        let temp = x;
        let sumDigits = 0;
        let hasZero = false;

        while (temp > 0) {
            let digit = temp % 10;
            if (digit === 0) {
                hasZero = true;
                break;
            }
            sumDigits += digit;
            temp = Math.floor(temp / 10);
        }

        if (!hasZero && sumDigits > 1) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(sumDigits); i++) {
                if (sumDigits % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) count++;
        }
    }
}
alert(count);