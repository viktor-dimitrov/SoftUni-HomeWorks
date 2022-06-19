function bombNumbers(numArray, bombArray) {
    let bombNum = bombArray[0];
    let range = bombArray[1] * 2 + 1;
    let sum = 0;

    for (let i = 0; i < numArray.length; i ++) {
        if (numArray[i] === bombNum) {
            let splicer = bombArray[1] + (numArray.length - i);
            numArray.splice(-splicer, range);
        }
    }

    for (let s = 0; s < numArray.length; s++) {
        sum += numArray[s];
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 0])