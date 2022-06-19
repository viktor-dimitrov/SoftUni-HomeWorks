function firstNadLastKNumbers (input) {
    let numCount = input.shift();
    let firstLine = input.slice(0,numCount);
    let secondLine = input.slice(-numCount);
    let output = `${firstLine.join(' ')}\n${secondLine.join(' ')}`;
    return output;
}
console.log(firstNadLastKNumbers([2, 
    7, 8, 9]))