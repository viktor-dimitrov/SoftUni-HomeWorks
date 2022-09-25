function sortingNumbers(inputArr) {
    let sorted = inputArr.sort((a, b) => a - b);
    let output = [];
    while (sorted.length > 0) {
        output.push(sorted.shift());
        output.push(sorted.pop());
    }
    return output;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])