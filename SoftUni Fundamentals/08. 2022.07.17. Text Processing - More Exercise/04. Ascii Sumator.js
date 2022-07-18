function asciiSumator(inputArr) {
    let text = inputArr.pop();
    let newArr = [inputArr[0].charCodeAt(), inputArr[1].charCodeAt()];
    let sortedInput = newArr.sort((a, b) => a - b);
    let start = sortedInput[0];
    let end = sortedInput[1];
    let sum = 0;

    for (let char of text) {
        let value = char.charCodeAt();
        if (value > start && value < end) {
            sum += value;
        }
    }
    console.log(sum);
}
asciiSumator(['@',
'1',
'dsg12gr5653feee5'])