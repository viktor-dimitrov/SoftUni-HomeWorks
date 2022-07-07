function addAndSubstract (arr) {
    let modArr = [];
    let arrSum = 0;
    let modSum = 0;
    

    for (let i = 0; i < arr.length; i ++) {
        let num = Number(arr[i]);
        arrSum += num;
        if (num % 2 === 0) {
            modArr.push(num + i);
            modSum += num + i;
        } else {
            modArr.push(num - i);
            modSum += num - i;
        }
    }


console.log(modArr);
console.log(arrSum);
console.log(modSum);

}
addAndSubstract([5, 15, 23, 56, 35])