function equalArrays (firstArr, secArr) {
let stop = firstArr.length - 1;
let sum = 0;
let isIdent = true;

for (let i = 0; i <= stop; i ++) {
    let num1 = Number(firstArr[i]);
    let num2 = Number(secArr[i]);

    if (num1 === num2) {
        sum += num1;
    } else {
        console.log (`Arrays are not identical. Found difference at ${i} index`);
        isIdent = false;
        break;
    } 
}

if (isIdent) {
    console.log(`Arrays are identical. Sum: ${sum}`);
}

}
equalArrays(['10','20','30'], ['10','20','30'])