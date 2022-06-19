function negativeOrPositiveNumbers(input) {
    let myArray = [];

    for(let num of input) {
        if (num < 0) {
            myArray.unshift(num);
        } else {
            myArray.push(num);
        }
    }
    return myArray.join('\n');
}
console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']))