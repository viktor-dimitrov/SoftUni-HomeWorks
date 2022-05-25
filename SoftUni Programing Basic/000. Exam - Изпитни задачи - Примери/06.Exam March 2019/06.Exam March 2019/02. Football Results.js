function footballResults (input) {
    let winsCount = 0;
    let lostsCount = 0;
    let drawnsCount = 0;
    let index = 0;
    for (let i = 1; i <= 3; i++) {
        let result = input[index];
        index++;
        if (result[0] > result[2]) {
            winsCount++;
        } else if (result[0] < result[2]) {
            lostsCount++;
        } else {
            drawnsCount++
        }
    }
    console.log(`Team won ${winsCount} games.`);
    console.log(`Team lost ${lostsCount} games.`);
    console.log(`Drawn games: ${drawnsCount}`);
}
footballResults(["3:1",
"0:2",
"0:0"])