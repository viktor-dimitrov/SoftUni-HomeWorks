function replaceRepeatingChars(inputString) {

    let bufferString = '';
    let firstChar = inputString[0];
    bufferString += firstChar;

    for (let i = 1; i < inputString.length; i++) {
        if (inputString[i] != firstChar) {
            firstChar = inputString[i];
            bufferString += firstChar;
        }
    }
    console.log(bufferString);
}
replaceRepeatingChars ('qqqwerqwecccwd')