function getFibonator() {
    let arr = [0, 1];
    index = 1;

    return function ff() {
        arr.push(arr[index] + arr[index - 1]);
        return arr[index++];
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
