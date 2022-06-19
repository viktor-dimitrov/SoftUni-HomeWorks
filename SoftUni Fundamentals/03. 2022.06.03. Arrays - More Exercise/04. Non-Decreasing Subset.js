function nonDecreasingSubset (input) {
    let newArr = [input[0]];
    let inputL = input.length;

    for (let i = 1; i < inputL; i++) {
      let num = input[i];
        if (num > newArr[newArr.length - 1]) {
            newArr.push(num)
        }

    }
console.log(newArr.join(' '))

}
nonDecreasingSubset([ -1,1,2,1,1,2,1,2])