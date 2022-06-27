function friendListMaintence(input) {
    let myList = input.shift().split(', ');
    let lostCounter = 0;
    let bLCounter = 0;


    for (let line of input) {
        if (line == 'Report') {
            break;
        }
        let comArray = line.split(' ');
        let command = comArray[0];

        switch (command) {
            case 'Blacklist':
                let bLName = comArray[1];
                if (myList.includes(bLName)) {
                    myList.splice(myList.indexOf(bLName), 1, 'Blacklisted');
                    bLCounter++;
                    console.log(`${bLName} was blacklisted.`);
                } else {
                    console.log(`${bLName} was not found.`);
                    continue;
                }
                break;

            case 'Error':
                let errIndex = comArray[1];
                if (errIndex < 0 || errIndex > (myList.length - 1)) {
                    continue;
                } else {
                    if (myList[errIndex] == 'Blacklisted' || myList[errIndex] == 'Lost') {
                        continue;
                    } else {
                        let lostName = myList[errIndex];
                        myList[errIndex] = 'Lost';
                        lostCounter++
                        console.log(`${lostName} was lost due to an error.`);
                    }
                }
                break;

            case 'Change':
                let changeIndex = comArray[1];
                let newName = comArray[2];
                if (changeIndex < 0 || changeIndex > (myList.length - 1)) {
                    continue;
                } else {
                    let currName = myList[changeIndex];
                    myList[changeIndex] = newName;
                    console.log(`${currName} changed his username to ${newName}.`);
                }
                break;
        }
    }

    console.log(`Blacklisted names: ${bLCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(myList.join(' '));

}
friendListMaintence(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])