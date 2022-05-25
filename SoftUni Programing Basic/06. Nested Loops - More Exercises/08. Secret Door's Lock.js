function secretDoorsLock(input) {
    const maxA = Number(input[0]);
    const maxB = Number(input[1]);
    const maxC = Number(input[2]);
    let num = 0
    for (let a = 1; a <= maxA; a++) {
        for (let b = 1; b <= maxB; b++) {
            for (let c = 1; c <= maxC; c++) { 
                if (a % 2 == 0 && c % 2 == 0 &&  (b == 2 || b == 3 || b == 5 || b == 7 )) {
                    console.log (`${a} ${b} ${c}`)
                }
            }
        }
    }
}
secretDoorsLock(["8", "2", "8"])
