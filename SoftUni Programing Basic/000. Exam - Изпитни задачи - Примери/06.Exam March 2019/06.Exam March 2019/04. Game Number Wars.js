function gameNumberWars (input) {
    let aPlayer = input[0];
    let bPlayer = input[1];
    let index = 2;
    let command = input[index];
    let aPoints = 0;
    let bPoints = 0;
    let isWar = false;
    let winnerName = "";
    let winnerPoints = 0;

    while (command != "End of game") {
        let aCard = Number(input[index]);
        index++;
        let bCard = Number(input[index]);
        index++;
        command = input[index];

        if (isWar) {
            if(aCard > bCard) {
                winnerName = aPlayer;
                winnerPoints = aPoints;
            } else {
                winnerName = bPlayer;
                winnerPoints = bPoints;
            }
            break;
        }

        if (aCard > bCard) {
            aPoints += aCard - bCard;
        } else if (bCard > aCard) {
            bPoints += bCard - aCard;
        }
        
        if (aCard == bCard){
            isWar = true;
            continue;
        } 
    }

    if (isWar) {
        console.log(`Number wars!`);
        console.log(`${winnerName} is winner with ${winnerPoints} points`)
    } else {
        console.log(`${aPlayer} has ${aPoints} points`);
        console.log(`${bPlayer} has ${bPoints} points`);
    }
}
gameNumberWars (["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"])