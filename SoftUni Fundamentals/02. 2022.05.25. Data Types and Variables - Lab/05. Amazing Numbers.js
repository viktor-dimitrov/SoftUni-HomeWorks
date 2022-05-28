function amazingNumbers (num) {
    let stringNum = String(num);
    let sum = 0;
    let haveNine = false;

    for (let i = 0; i < stringNum.length; i++) {
        let digit = Number(stringNum[i]);
        sum += digit;
    }
    let stringSum = String(sum);

    for (let i = 0; i < stringSum.length; i++) {
        let digit = Number(stringSum[i]);
        if (digit % 9 == 0) {
            haveNine = true;
            break;
        }
    }

    if (haveNine) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
    
}
amazingNumbers(923423534677)