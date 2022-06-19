function simpleCalculator (num1, num2, operator) {

    let res;
    
    switch(operator) {
        case'multiply': res = (a, b) => (num1 * num2);break;
        case'divide': res = (a, b) => (num1 / num2);break;
        case'add':res = (a, b) => (num1 + num2);break;
        case'subtract':res = (a, b) => (num1 - num2);break;
    }
    return res(num1, num2)
} 

console.log(simpleCalculator(5, 5, 'add'
    ))
    