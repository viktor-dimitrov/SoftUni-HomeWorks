function printNthElement (input) {
    let inputL = input.length;
    let step = Number(input[inputL - 1]);
    let outputArray = [];
    
    for (let i = 0; i < inputL - 1; i +=step) {
        outputArray.push(input[i]);
    }

    console.log(outputArray.join(' '));

} 
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
