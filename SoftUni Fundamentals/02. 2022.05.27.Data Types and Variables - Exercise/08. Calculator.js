function calculator (firstNum, operator, secNum) {

    switch (operator) {
        case '+': console.log ((firstNum + secNum).toFixed(2)); break;
        case '-': console.log ((firstNum - secNum).toFixed(2)); break;
        case '*': console.log ((firstNum * secNum).toFixed(2)); break;
        case '/': console.log ((firstNum / secNum).toFixed(2)); break;
    }
}
calculator (5,
    '+',
    10)