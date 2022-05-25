function basketballTournament (input) {
    let matchesCounter = 0;
    let winCounter = 0;
    let lostCounter = 0;
    let index = 0;
    let command = input[index];

    while (command != "End of tournaments") {
        let tournamentName = input[index];
        index++;
        let matchesCount = Number(input[index]);
        index++;

        for (let i = 1; i <= matchesCount; i++) {
            let desiPoints = Number(input[index]);
            index++;
            let enemyPoints = Number(input[index]);
            index++;
            let difference = Math.abs(desiPoints - enemyPoints);
            matchesCounter++;
           
            if (desiPoints > enemyPoints) {
                winCounter++;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${difference} points.`);
            } else {
                lostCounter++;
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${difference} points.`);
            }
        }
        command = input[index];
    }    
    console.log(`${(winCounter / matchesCounter * 100).toFixed(2)}% matches win`);
    console.log(`${(lostCounter / matchesCounter * 100).toFixed(2)}% matches lost`);
}
basketballTournament (["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])