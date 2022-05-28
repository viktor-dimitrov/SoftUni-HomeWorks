function evenAndOddSubstraction (input) {
    let stop = input.length - 1;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i <= stop; i ++) {

        let num = Number(input[i]);
        if (num % 2 == 0) {
            evenSum += num;
        } else  {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubstraction ([3,5,7,9])