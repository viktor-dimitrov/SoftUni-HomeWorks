function smallestTwoNumbers(inputArray) {
    inputArray.sort((a, b) => a - b).splice(2);
    console.log(inputArray.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])