function mirrorWords(inputArray) {
    let text = inputArray.join('');
    let pattern = /(?<tag>[#@])(?<first>[A-Za-z]{3,})\1{2}(?<sec>[A-Za-z]{3,})\1/g;
    let valid = pattern.exec(text);
    let counter = 0;
    let output = [];

    while (valid !== null) {
        counter++;
        let firstWord = valid.groups.first;
        let secondWord = valid.groups.sec;

        if (firstWord === (secondWord.split('').reverse().join(''))) {
            output.push(`${firstWord} <=> ${secondWord}`)
        }
        valid = pattern.exec(text);
    }

    if (counter === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${counter} word pairs found!`);
    }
    
    if (output.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:`);
        console.log(output.join(', '));
    }
}
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])