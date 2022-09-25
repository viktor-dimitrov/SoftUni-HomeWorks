function jansNotation (arr) {

    let operatorEnum = {
        "+"(a, b) {
            return a + b;
        },
        "-"(a, b) {
            return a - b;
        },
        "*"(a, b) {
            return a * b;
        },
        "/"(a, b) {
            return a / b;
        }
    }

    let buffArray = [];
    for (let i = 0; arr.length > 0; i++) {
        let element = arr.shift();
        if (!isNaN(element)) {
            buffArray.push(element);
        } else {
            let operator = element;
            let b = buffArray.pop();
            let a = buffArray.pop();
            let num = operatorEnum[operator](a, b);
            buffArray.push(num);   
        }
    }
    
    if (isNaN(buffArray[0])) {
        console.log('Error: not enough operands!');
    } else if (buffArray.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(buffArray[0]);
    }

}
jansNotation([15,3,2,'/'
])