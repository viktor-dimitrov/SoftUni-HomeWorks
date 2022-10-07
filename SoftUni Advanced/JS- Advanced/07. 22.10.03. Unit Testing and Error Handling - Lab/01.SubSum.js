function subSum(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN
    }

    for (let element of arr){
       
        if (typeof(element) !== 'number') {
            return NaN
        }
    }

    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    let sum = arr.slice(start, end + 1).reduce((acc, num) => acc + num, 0)

    return sum 
}
console.log(subSum(5, 1, 2))