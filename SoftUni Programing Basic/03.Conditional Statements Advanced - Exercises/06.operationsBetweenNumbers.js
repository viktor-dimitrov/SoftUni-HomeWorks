function operationsBetweenNumbers (input) {
    const firstNum = Number (input[0]);
    const secondNum = Number (input[1]);
    const operator = input[2];
    let result = 0;
    let oddOrEven = "";

    switch (operator) {
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum; break;
        case "*": result = firstNum * secondNum; break;
        case "/": result = firstNum / secondNum; break;
        case "%": result = firstNum % secondNum; break;
    }
    if (result % 2 === 0) {
        oddOrEven = "even";
    } else {
        oddOrEven = "odd";
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        console.log (`${firstNum} ${operator} ${secondNum} = ${result} - ${oddOrEven}`);
    } else if (operator === "%" || operator === "/") {
        if (secondNum === 0) {
            console.log (`Cannot divide ${firstNum} by zero`);
        } else {
            switch (operator){
                case "/": console.log (`${firstNum} ${operator} ${secondNum} = ${result.toFixed(2)}`); break;
                case "%": console.log (`${firstNum} ${operator} ${secondNum} = ${result}`); break;
            }       
    } 
    } 
}
operationsBetweenNumbers ([10, 0, "%"])