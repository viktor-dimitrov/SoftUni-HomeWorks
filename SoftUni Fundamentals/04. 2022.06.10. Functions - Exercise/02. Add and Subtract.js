function addAndSubtract (num1, num2, num3) {

    let sumAndSub = (firstNum, secondNum, thirdNumber) => (firstNum + secondNum) - thirdNumber;
    return (sumAndSub(num1,num2,num3)) ;
}
console.log(addAndSubtract(23,
    6,
    10
    ))