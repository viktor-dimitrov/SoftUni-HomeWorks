function subtract() {

    let firstNum = Number(document.getElementById("firstNumber").value);
    let secondNum = Number(document.getElementById("secondNumber").value);
    let res = firstNum - secondNum;
    document.getElementById("result").innerText = res;

}