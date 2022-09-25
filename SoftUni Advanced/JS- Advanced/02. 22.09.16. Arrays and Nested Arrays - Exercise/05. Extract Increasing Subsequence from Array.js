function extractIIncreasingSubsequenceFromArray(inputArr) {
    let newArr = [];
    newArr.push(inputArr.shift());
    inputArr.forEach(num => {
        if (num >= newArr[newArr.length - 1]) {
            newArr.push(num);
        }
    });
    return newArr ;
}
extractIIncreasingSubsequenceFromArray (
    [1, 
        3, 
        3, 
        3, 
        10, 
        12, 
        3, 
        2, 
        24])