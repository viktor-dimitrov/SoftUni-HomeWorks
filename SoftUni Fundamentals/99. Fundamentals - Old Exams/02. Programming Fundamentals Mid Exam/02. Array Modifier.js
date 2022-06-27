function arrayModifier (input) {
    let numArray = input.shift().split(' ').map(Number);
    let comArray = input.slice();
    let numArrayL = numArray.length;
    let index = 0;
    let commandLine = comArray[index];

    while(commandLine) {
        if (commandLine == 'end') {
            break;
        }
        let lineArray = commandLine.split(' ');
        let command = lineArray[0];

        let firstIndex = Number(lineArray[1]);
        let secondIndex = Number(lineArray[2]);
        let firstEl = numArray[firstIndex];
        let secondEl = numArray[secondIndex];
        
        switch (command) {
            case'swap':
            numArray.splice(firstIndex, 1, secondEl);
            numArray.splice(secondIndex, 1, firstEl);
            break;

            case'multiply':
            numArray.splice(firstIndex, 1,(firstEl * secondEl));
            break;
            
            case'decrease':
            numArray = numArray.map((el) => el - 1);
            break;
        }

        index++;
        commandLine = comArray[index];
    }
    return numArray.join(', ');

}
console.log(arrayModifier ( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]))