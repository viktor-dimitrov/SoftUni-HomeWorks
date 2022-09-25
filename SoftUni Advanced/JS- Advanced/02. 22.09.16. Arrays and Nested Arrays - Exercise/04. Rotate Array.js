function rotateArray (inputArr, num) {
    for (let i = 0; i < num; i++) {
        inputArr.unshift(inputArr.pop())
    }
    console.log(inputArr.join(' '))
}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)