function primePairs (input) {
    const aStart = Number(input[0]);
    const bStart = Number(input[1]);
    const aStop = aStart + Number(input[2]);
    const bStop = bStart + Number(input[3]);

    for (let a = aStart; a <= aStop; a++) {
        for (let b = bStart; b <= bStop; b++) {
            let aPrime = true;
            let bPrime = true;
            for (let i = 2; i < a; i++) {
                if (a % i == 0) {
                    aPrime = false;
                    break;
                }
            }
            for (let j = 2; j < b; j++) {
                if (b % j == 0) {
                    bPrime = false;
                    break;
                }
            }
            if (aPrime == true && bPrime == true) {
                console.log(`${a}${b}`);
            }
        }
    }
}
primePairs (["11", "23", "5", "5"])

