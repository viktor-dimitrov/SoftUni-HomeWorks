function printEveryNthElementFromAnArray(inputArr, step) {
    let myArr = [];
    for (let i = 0; i < inputArr.length; i += step) {
        myArr.push(inputArr[i]);
    }
    return myArr;
}
printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2)