function sumFirstLast (inputArr) {
    let numArray = inputArr.map(Number);
    console.log(numArray.shift() + numArray.pop());
}
sumFirstLast (['20', '30', '40'])