function train(input) {
    let wagons = input.shift().split(' ').map((x) => Number(x))
    let maxInWagon = Number(input.shift());
    let commandArray = [];
    
    for (let i = 0; i < input.length; i ++) {
        let command = input[i].split(' ');
        for (let j = 0; j < command.length;j++) {
            commandArray.push(command[j]);
        }
    }
   
    let index = 0;
    let command = commandArray[index];

    while(command) {
        if (command === 'Add') {
            index++;
            command = commandArray[index];
            wagons.push(command);
        } else {
        let clients = Number(command);
        for (let i = 0; i < wagons.length; i++) {
            if ((wagons[i] + clients) <= maxInWagon) {
                wagons[i] = wagons[i] + clients;
                break;
            } 
        } 
    }
        index++;
        command = commandArray[index];
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])