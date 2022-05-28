function uniquePINCodes (input) {
    const firstMax = Number(input[0]);
    const secondMax = Number(input[1]);
    const tirdthMax = Number(input[2]);
    let numMax = `${firstMax}${secondMax}${tirdthMax}`;
    let pinStart = 222;
    let pinEnd = Number(numMax);
    let isPrime = true;
    for (let i = pinStart; i <= pinEnd;i++){
        let pin = "" + i;
        let a = Number(pin[0]);
        let b = Number(pin[1]);
        let c = Number(pin[2]);
            isPrime = true;
            for (let j = 2; j < b; j++){
                if (b % j == 0) {
                    isPrime = false;
                }
            }
        let realPin = "";    
            if (a % 2 == 0 && a <= firstMax) {
                realPin += `${a} `;
            }
            if (b != 0 && b != 1 && isPrime && b <= secondMax) {
                realPin += `${b} `;
            }
            if (c != 0 && c <= tirdthMax && c % 2 == 0) {
                realPin += `${c}`;
            }
            if (realPin.length == 5) {
                console.log(realPin);
            }
        }          
}
uniquePINCodes([3,5,5])
