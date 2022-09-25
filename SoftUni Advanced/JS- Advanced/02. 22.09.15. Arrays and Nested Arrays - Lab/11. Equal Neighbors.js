function equalNeighbors (inputArr) {
let output = 0;
let stop = inputArr.length;

for (let i = 0; i < stop; i ++) {
  for (let j = 0;j < inputArr[i].length; j ++) {
    let num3 = inputArr[i][j + 1];
    if (inputArr[i][j] === num3) {
        output++;
    }
    if ((i + 1) < stop) {
        let num1 = inputArr[i][j];
        let num2 = inputArr[i + 1][j];
        
        if ( num1 === num2 ) {
            output++;
        }
    }
  }
}

return output;

}
equalNeighbors([
['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']])