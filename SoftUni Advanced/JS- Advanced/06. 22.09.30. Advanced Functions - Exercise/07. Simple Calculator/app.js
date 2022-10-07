function calculator() {
    let inputBox1;
    let inputBox2;
    let resultBox;

    function init(first, second, result) {
        inputBox1 = document.querySelector(first);
        inputBox2 = document.querySelector(second);
        resultBox = document.querySelector(result);
    }

    function add() {
        resultBox.value = Number(inputBox1.value) + Number(inputBox2.value);
    }

    function  subtract() {
        resultBox.value = Number(inputBox1.value) - Number(inputBox2.value);
    }

    let calc = {
        init,
        add,
        subtract
    }
    
    return calc;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result')



