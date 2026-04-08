let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = (current / 2) + seed;
    } else {
        current = (current * 3) + seed;
    }
}

let isThreeDigits = (current >= 100 && current <= 999);
let middleDigit = Math.floor(current / 10) % 10;

if (isThreeDigits && middleDigit === seed) {
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}