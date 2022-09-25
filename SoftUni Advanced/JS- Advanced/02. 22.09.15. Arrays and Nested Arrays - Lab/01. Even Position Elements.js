function evenPositionElements(inputArr) {
    let newArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(inputArr[i]);
        }
    }
console.log(newArr.join(' '));

}
evenPositionElements (['20', '30', '40', '50', '60'])