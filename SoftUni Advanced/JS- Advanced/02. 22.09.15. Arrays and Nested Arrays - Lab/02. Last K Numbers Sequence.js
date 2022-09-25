function lastKNumbersSequence(n, k) {

    let arr = [1];

    for (let i = 0; arr.length < n; i++) {
        let sum = arr.slice(-k).reduce((x, y) => x +y);
        arr.push(sum)
        
    }

console.log(arr)

}
lastKNumbersSequence(8, 2)