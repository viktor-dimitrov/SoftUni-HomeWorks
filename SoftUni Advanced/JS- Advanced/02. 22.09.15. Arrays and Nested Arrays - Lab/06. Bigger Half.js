function biggerHalf (inputArray) {
    inputArray.sort((a, b) => a - b);
    let biggerCount = Math.ceil(inputArray.length / 2);
    return inputArray.splice(-biggerCount);
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6,]))