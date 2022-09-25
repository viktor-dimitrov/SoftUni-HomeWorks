function diagonalSums(inputArr) {
    let elLength = inputArr.length;
    let sum1 = 0;
    let sum2 = 0;
    let j = elLength - 1;

    for (let i = 0 ;i < elLength; i++ ) {
        sum1 += inputArr[i][i];
        sum2 += inputArr[j][i];
        j--;
    }
   
console.log(`${sum1} ${sum2}`)
}
diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])