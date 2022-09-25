function calorieObject(inputArr) {
    let obj = {};
    while (inputArr.length > 0) {
        obj[inputArr.shift()] = Number(inputArr.shift());
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])