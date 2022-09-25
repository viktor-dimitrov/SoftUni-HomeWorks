function biggestElement(inputArray) {
    let line = [];
    inputArray.forEach(arr => {
        line.push(...arr);
    });
    return Math.max(...line);
}
console.log (biggestElement ([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))