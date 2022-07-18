function cutAndReverse (inputString) {
    let firstPart = inputString.split('').reverse().splice(inputString.length / 2, inputString.length);
    let secPart = inputString.split('').reverse().splice(0, inputString.length / 2);
    return `${firstPart.join('')}\n${secPart.join('')}`;
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')