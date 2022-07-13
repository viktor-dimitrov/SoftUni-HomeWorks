function aMinerTask(inputArray) {

    let myObject = {};

    let index = 0;
    let command = inputArray[index];

    while (command) {
        let resource = command;
        index++;
        command = inputArray[index];
        let quantity = Number(command);
        index++;
        command = inputArray[index];

        if (!myObject.hasOwnProperty(resource)) {
            myObject[resource] = 0;
        }
        myObject[resource] += quantity;
    }
    for (let key in myObject) {
        console.log(`${key} -> ${myObject[key]}`)
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])