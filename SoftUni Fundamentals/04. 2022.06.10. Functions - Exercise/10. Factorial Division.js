function factorialDivision (firstNum, secondNum) {

    let firstFactorial = firstNum;
    let secondFactorial = secondNum;

    for (let i = firstNum - 1; i > 1; i--) {
        firstFactorial *= i;
    }

    for (let j = secondNum - 1; j > 1; j--) {
        secondFactorial *= j;
    }

    return (firstFactorial / secondFactorial).toFixed(2);

}
console.log(factorialDivision (6,2))