function processOddNumbers (input) {
    let myArray = [];
    let inputL = input.length;
    for (let i = 1; i < inputL; i+=2){
        let num = input[i] * 2;
        myArray.unshift(num);
    }
    return myArray.join(' ');
}
console.log(processOddNumbers([10, 15, 20, 25]))