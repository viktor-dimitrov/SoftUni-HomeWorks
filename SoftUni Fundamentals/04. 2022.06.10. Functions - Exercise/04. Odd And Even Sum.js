function oddAndEvenSum (number) {
    let digitsArray = String(number).split('')
    let end = digitsArray.length;
    let oddSum = 0;
    let evenSum = 0;
    
    for (let i = 0; i < end; i++) {
        let digit = Number(digitsArray[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}
oddAndEvenSum(1000435)