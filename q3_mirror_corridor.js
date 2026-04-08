let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let foundX = -1;

for (let X = 0; X <= 10000; X++) {
    let num = N + X;
    
    if (num % K === 0) {
        let strNum = num.toString();
        let reversed = "";
        for (let i = strNum.length - 1; i >= 0; i--) {
            reversed += strNum[i];
        }
        
        if (strNum === reversed) {
            foundX = X;
            break;
        }
    }
}
alert(foundX);