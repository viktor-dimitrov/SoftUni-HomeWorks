function sumOfNubers(firstNum, endNum) {

    let start = Number(firstNum);
    let stop = Number(endNum);
    let totalSum = 0;

    for (let i = start; i <= stop; i++) {
        totalSum += i;
    }
console.log(totalSum);

}
sumOfNubers ('-8', '20')