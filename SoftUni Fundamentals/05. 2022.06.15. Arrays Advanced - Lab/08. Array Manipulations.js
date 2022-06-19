function arrayManipulations (input) {
    let myArray = input.shift().split(' ');
    let commandsArray = [];
    
    for (let i = 0; i < input.length; i ++) {
        let comm = ((input[i]).split(' '));
        for (let j = 0; j < comm.length; j ++) {
            commandsArray.push(comm[j]);
        }
    }
    
    let index = 0;
    let command = commandsArray[index];

    while (command) {
        switch(command) {

            case'Add':
            index++;
            command = commandsArray[index];
            myArray.push(command); 
            break;

            case'Remove':
            index++;
            command = commandsArray[index];
            myArray = myArray.filter(el => el != command);
            break;

            case'RemoveAt':
            index++;
            command = commandsArray[index];
            myArray.splice(command, 1);
            break;

            case'Insert':
            index++;
            command = commandsArray[index];
            let number = command;
            index++;
            command = commandsArray[index];
            let startIndex = command;
            myArray.splice(startIndex, 0, number);
            break;
            
        }
        index++
        command = commandsArray[index]
    } 
    console.log(myArray.join(' '))

}
arrayManipulations (['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])