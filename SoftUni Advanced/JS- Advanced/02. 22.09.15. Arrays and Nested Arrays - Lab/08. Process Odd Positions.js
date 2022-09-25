function processOddPositions(inputArray) {
    let newArr = inputArray.map(num => num * 2).filter((num, index) => index % 2 != 0).reverse().join(' ');
    return newArr;
}
console.log(processOddPositions ([10, 15, 20, 25]))