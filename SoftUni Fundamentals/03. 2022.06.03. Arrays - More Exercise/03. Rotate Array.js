function rotateArray (arr) {
    let arrL = arr.length;
    let rotations = Number(arr.pop());

    for (let i = rotations; i > 0 ; i--) {
        let tempEl = arr.pop();
        arr.unshift(tempEl)
    }

console.log(arr.join(' '))

}
rotateArray (['Banana', 'Orange', 'Coconut', 'Apple', '15'])
rotateArray(['1', '2', '3', '4', '2'])