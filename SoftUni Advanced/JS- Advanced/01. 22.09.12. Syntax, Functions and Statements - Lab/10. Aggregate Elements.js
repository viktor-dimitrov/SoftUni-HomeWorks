function aggregateElements (inputArray) {

    let sum = 0;
    let inverseSum = 0;
    inputArray.forEach(num => {
        sum += num;
        inverseSum += 1/num;
    });
    console.log(sum)
    console.log(inverseSum)
    console.log(inputArray.join(''))




}
aggregateElements ([1, 2, 3])