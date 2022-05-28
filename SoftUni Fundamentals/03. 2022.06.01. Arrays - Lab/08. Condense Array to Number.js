function condenseArrayToNumber (input) {
    let stop = input.length - 1;
    let outputArr = input;
    
    if (input.length === 1) {
        console.log(input[0]);
    } else {

    while (outputArr.length > 1) {
        let tempArr = [];

        for (let i = 0; i < outputArr.length - 1; i ++) {
            tempArr.push(outputArr[i] + outputArr[i + 1]);
        }

        outputArr = tempArr;
        tempArr = [];
    }
    console.log(outputArr[0]);
}
}
condenseArrayToNumber ([5,7,9,8,5,7])