function magicMatrices(matrix) {
    let flag = true;

    let controlSum = matrix[0].reduce((acc, num) => acc + num);

    for (let i = 0; i < matrix.length; i++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let j = 0; j < matrix[i].length; j++) {
            sumRow += Number(matrix[i][j]);

            if (j >= matrix.length) {
                break;
            }
            sumCol += Number(matrix[j][i]);
        }
        if (controlSum != sumRow || controlSum != sumCol) {
            flag = false;
            break;
        }
    }
    console.log(flag);

}
magicMatrices(
    [[1, 0, 0],
    [0, 0, 1]])