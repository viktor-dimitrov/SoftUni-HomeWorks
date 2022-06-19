function sumFirstAndLast (input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input.pop());
    let sum = firstNum + lastNum;
    return sum
}
console.log(sumFirstAndLast(['20', '30', '40']))