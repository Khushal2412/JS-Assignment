let base = parseFloat(prompt("Enter base:"));
let distance = parseFloat(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutesLate:"));
let seed = parseInt(prompt("Enter seed:"));

let fare = base + (7 * distance);

if (minutesLate > 15) fare += 20;
if (distance > 10) fare += (0.10 * fare);

if (seed % 2 !== 0) {
    fare -= seed;
} else {
    fare += seed;
}

// Round up to the nearest multiple of 5
let finalFare = Math.ceil(fare / 5) * 5;
alert(finalFare);