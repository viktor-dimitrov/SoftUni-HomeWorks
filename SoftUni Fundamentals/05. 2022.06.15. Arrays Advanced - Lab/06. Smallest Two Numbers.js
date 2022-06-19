function smallestOFTwoNumbers (input) {
    let sortedArray = input.sort((a,b) => a - b).slice(0,2);
    return sortedArray.join(' ');
}
console.log(smallestOFTwoNumbers([3, 0, 10, 4, 7, 3]))