function numberModification (num) {
    let myArray = String(num).split('');
    let sum = 0;
    
    for (let el of myArray) {
        sum += Number(el);
    }

    let average = sum / myArray.length;

    while (average < 5) {
        myArray.push(9);
        sum += 9;
        average = sum / myArray.length;
    }
    return myArray.join('');
}
console.log(numberModification(5835))