function tresureHunt(input) {
    let myLoot = input.shift().split("|");
    let sum = 0;

    for (let commandLine of input) {
        if (commandLine === 'Yohoho!') {
            break;
        }
        let comArray = commandLine.split(' ');
        let command = comArray.shift();

        switch (command) {
            case 'Loot':
                for (let loot of comArray) {
                    if (!myLoot.includes(loot)) {
                        myLoot.unshift(loot);
                    }
                }
                break;

            case 'Drop':
                let index = Number(comArray[0]);
                if (index < 0 || index > myLoot.length - 1) {
                    continue;
                } else {
                    myLoot.push(myLoot[index]);
                    myLoot.splice(index, 1);
                }
                break;

            case 'Steal':
                let stealIndex = Number(comArray[0]);
                let sliceItems = myLoot.slice(-stealIndex);
                myLoot.splice(myLoot.indexOf(sliceItems[0]), sliceItems.length);
                console.log(sliceItems.join(', '));
                break;
        }
    }

    for (let item of myLoot) {
        sum += Number(item.length);
    }

    let averageGain = (sum / myLoot.length).toFixed(2);

    if (myLoot.length == 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        console.log(`Average treasure gain: ${averageGain} pirate credits.`);
    }
}
tresureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])