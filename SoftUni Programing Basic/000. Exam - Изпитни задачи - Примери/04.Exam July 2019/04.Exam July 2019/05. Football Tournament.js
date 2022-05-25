function footballTournament (input) {
    const teamName = input[0];
    const gamesCount = Number(input[1]);
    let counterW = 0;
    let counterD = 0;
    let counterL = 0;
    let points = 0;
    let index = 2;
    
    for (let i = 1; i <= gamesCount; i++) {
        let rate = input[index];
        index++;
        
        if (rate == "W") {
            counterW ++;
            points +=3;
        } else if (rate == "D") {
            counterD ++;
            points ++;
        } else if (rate == "L") {
            counterL ++;
        }
        
    }
    if (gamesCount == 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
    } else {
        console.log(`${teamName} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${counterW}`);
        console.log(`## D: ${counterD}`);
        console.log(`## L: ${counterL}`);
        console.log(`Win rate: ${(counterW / gamesCount * 100).toFixed(2)}%`);
    }
}
footballTournament (["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])