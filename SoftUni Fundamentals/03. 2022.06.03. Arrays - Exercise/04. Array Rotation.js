function arrayRotation (arr,rotations) {

    let arrL = arr.length;

    for (let i = 0 ; i < rotations; i++) {
        let num = arr.shift();
       
        if (i <= rotations) {
        arr.push(num);
        }
    }

    console.log(arr.join(' '))
}
arrayRotation([2, 4, 15, 31], 5)