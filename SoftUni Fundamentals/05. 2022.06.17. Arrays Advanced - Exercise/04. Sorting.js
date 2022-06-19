function sorting(input) {

    input.sort((a, b) => a - b);
    let outputArray = [];

    while (input.length != 0) {
        outputArray.push(input.pop());
        outputArray.push(input.shift());
    }
    console.log(outputArray.join(' '));
}
sorting ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])