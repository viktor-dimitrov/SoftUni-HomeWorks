function numbers (input) {
    let numArray = input.split(' ').map(Number).sort((a,b) => b - a);
    let sum = 0;
    for (let num of numArray) {
        sum += num;
    } 

    let average = sum / numArray.length;
    let filtredArray = numArray.filter((num) => num > average).slice(0,5).join(' ');

    if (filtredArray.length <= 1) {
        console.log('No');
    } else {
        console.log(filtredArray);
    }
}
numbers('5 5 3')