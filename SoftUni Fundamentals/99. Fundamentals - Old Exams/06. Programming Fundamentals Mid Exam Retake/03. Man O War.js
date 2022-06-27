function manOWar(input) {
    let myShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let repHealthLevel = maxHealth / 5;
    let gameOver = false;

    for (let line of input) {
        if (line == "Retire") {
            break;
        }

        let comArray = line.split(' ');
        let command = comArray.shift();

        switch (command) {
            case 'Fire':
                let fireIndex = Number(comArray[0]);
                let fireDmg = Number(comArray[1]);

                if (fireIndex < 0 || fireIndex > (warShip.length - 1)) {
                    continue;
                } else {
                    warShip[fireIndex] -= fireDmg;

                    if (warShip[fireIndex] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        gameOver = true;
                        break;
                    }
                }
                break;

            case 'Defend':
                let startIndex = Number(comArray[0]);
                let endIndex = Number(comArray[1]);
                let defDmg = Number(comArray[2]);

                if (startIndex < 0 || startIndex > (myShip.length - 1) || endIndex < 0 ||endIndex > (myShip.length - 1)) {
                    continue;
                } else {
                    for (let i = startIndex; i <= endIndex; i++) {
                        myShip[i] -= defDmg;

                        if (myShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            gameOver = true;
                            break;
                        }
                    }
                }
                break;

            case 'Repair':
                let repIndex = Number(comArray[0]);
                let healthAdd = Number(comArray[1]);

                if (repIndex < 0 || repIndex > (myShip.length - 1)) {
                    continue;
                } else {
                    myShip[repIndex] += healthAdd;
                    if (myShip[repIndex] > maxHealth) {
                        myShip[repIndex] = maxHealth;
                    }
                }
                break;

            case 'Status':
                let counter = 0;
                for (let section of myShip) {
                    if (section < repHealthLevel) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`)
                break;
        }

    }

    let myShipStatus = 0;
    let warShipStatus = 0;

    for (let mySection of myShip) {
        myShipStatus += mySection;
    }

    for (let warSection of warShip) {
        warShipStatus += warSection;
    }

    if (!gameOver) {
        console.log(`Pirate ship status: ${myShipStatus}\nWarship status: ${warShipStatus}`);
    }
}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])