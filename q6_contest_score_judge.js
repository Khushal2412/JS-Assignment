let a = parseInt(prompt("Enter correct (a):"));
let b = parseInt(prompt("Enter partial (b):"));
let c = parseInt(prompt("Enter wrong (c):"));

let score = (3 * a) + b - (2 * c);

if (score < 0) score = 0;
if ((a + b + c) > 50) score -= 10;

let status = (score >= 60) ? "PASS" : "FAIL";

alert(score + ", " + status);