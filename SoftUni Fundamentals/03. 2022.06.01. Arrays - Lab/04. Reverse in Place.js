function reverseInPlace (input) {
    
    let start = input.length - 1;
    let printLine = '';

    for ( let i = start; i >= 0; i--) {
        printLine += `${input[i]} `;
    }
    console.log(printLine)
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])