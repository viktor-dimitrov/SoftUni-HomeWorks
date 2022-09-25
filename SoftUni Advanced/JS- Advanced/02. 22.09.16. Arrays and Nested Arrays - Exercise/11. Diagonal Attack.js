function diagonalAttack(inputArr) {
    let matrix = inputArr.map((row) => row.split(' '));
    let sum1 = 0;
    let sum2 = 0;
    let j = matrix.length - 1;
    let k = 1;
    let size = Number(j)
    let isEqual = true;

    for (let i = 0; i < size + 1; i++) {
        let point1 = Number(matrix[i][i]);
        let point2 = Number(matrix[j][i]);
        for (let p = 0; p <= size; p++) {
            if (p != i && p != j) {
                matrix[i][p] = 'X';
            }
        }
        sum1 += point1;
        sum2 += point2;
        j--;

        if (sum1 != sum2) {
            isEqual = false;
            break;
        }
    }
    for (let h = 0; h <= size; h++) {
        for (let g = 0; g <= size; g++) {
            if (matrix[g][h] === 'X') {
                matrix[g][h] = sum1;
            }
        }
    }
    if (isEqual) {
        matrix.forEach(element => {
            console.log(element.join(' '));
        });
    } else {
        console.log(inputArr.join('\n'));
    }

}

diagonalAttack(
    ['5 3 12 3',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
    
)