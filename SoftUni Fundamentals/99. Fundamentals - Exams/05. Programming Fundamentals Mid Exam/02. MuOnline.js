function muOnline (input) {
    let comArray = input.slice().split("|");
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    
    for (let i = 0; i < comArray.length; i ++) {
        let line = comArray[i].split(' ');
        let command = line[0];
        let points = Number(line[1]);
        roomCounter++;

        if (command == 'potion') {
            
            if ((health + points) > 100) {
                points = 100 - health
                health = 100;
            } else {
                health += points;
            }
            console.log(`You healed for ${points} hp.`)
            
            if (health > 100) {
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            console.log(`You found ${points} bitcoins.`);
            bitcoins += points;
        } else {
            health -= points;
            if (health > 0) {
            console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }
        }
    }
    
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 0|potion 30|rat 10|chest 100|boss 70|chest 1000")