function reverseAnArrayOfNumbers (num, input) {
    let start = num - 1
    let printLine = '';
    for (let i = start; i >= 0; i --) {
        printLine += `${input[i]} `;
    }
    console.log(printLine)
}
reverseAnArrayOfNumbers (3, [10, 20, 30, 40, 50])