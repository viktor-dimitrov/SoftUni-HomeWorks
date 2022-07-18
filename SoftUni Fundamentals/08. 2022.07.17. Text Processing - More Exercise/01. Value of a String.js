function valueOfAString(inputArray) {
    let sum = 0;
    let [text, command] = inputArray

    switch (command) {
        case 'LOWERCASE':
            text.split('').forEach(element => {
                if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
                    sum += element.charCodeAt();
                }
            });
            break;
        case 'UPPERCASE':
            text.split('').forEach(element => {
                if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
                    sum += element.charCodeAt();
                }
            });
            break;
    }
    return `The total sum is: ${sum}`
}
valueOfAString(['AC/DC',
'UPPERCASE'])

