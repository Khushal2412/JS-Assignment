let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let sum = 0;
let m = 0;
let skipValue = seed + 2;

while (sum < N) {
    m++;
    if (m % skipValue !== 0) {
        sum += m;
    }
}
alert("m: " + m + ", sum: " + sum);