function reverseString (word) {

    let start = Number(word.length);
    let printLine = '';

    for (let i = start; i >= 0; i--) {
        printLine += word.charAt(i);
    }
    console.log(printLine)
}
reverseString ('Hello')