function NxNMatrix (num) {
    let lineArray = [];

    for (let i = 0; i < num; i++) {
        lineArray.push(num);
    }
    for (let j = 0; j < num; j++) {
        console.log(lineArray.join(' '));
    }

}
NxNMatrix(3)