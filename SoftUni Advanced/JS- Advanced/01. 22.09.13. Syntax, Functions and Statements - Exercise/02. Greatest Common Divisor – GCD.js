function greatestCommonDivisor (first, second) {

    let gcd = 0;
    let stop = Math.min(first, second);

    for (let i = 1; i <= stop; i ++) {
        if (first % i == 0 && second % i == 0 && i > gcd) {
            gcd = i;
        }
    }
 console.log(gcd);
}
greatestCommonDivisor(2154, 458)