function pascalCaseSplitter(inputString) {

    let newString = '';

    for (let i = 0; i < inputString.length; i++) {
        let nextChar = inputString[i + 1]
        if (nextChar === undefined) {
            newString += inputString[i];
            break;
        }
        if (nextChar.charCodeAt() < 97) {
            newString += inputString[i];
            newString += ', ';
            
        } else {
            newString += inputString[i];
        }
    }
    console.log(newString);
}
pascalCaseSplitter('SplitMe')