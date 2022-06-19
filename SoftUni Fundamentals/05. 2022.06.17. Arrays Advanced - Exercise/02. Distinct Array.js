function distanceArray (input) {

    let outputArray = [];
    for (let i = 0; i < input.length; i ++) {
        let num = input[i];
        if (!outputArray.includes(num)) {
            outputArray.push(num);
        }
    }
    console.log(outputArray.join(' '));

}
distanceArray ([7, 8, 9, 7, 2, 3, 4, 1, 2])