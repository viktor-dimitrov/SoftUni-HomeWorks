function negativePositiveNumbers (inputArray) {
    let newArray = [];
    inputArray.forEach(num => {
        num < 0 ? newArray.unshift(num) : newArray.push(num);
    });
    console.log(newArray.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9])