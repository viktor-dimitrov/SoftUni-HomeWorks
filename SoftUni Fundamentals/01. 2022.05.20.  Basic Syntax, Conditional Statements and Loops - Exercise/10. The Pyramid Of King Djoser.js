function thePyraminOfKingDjoser (base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;
    
        for (let i = base; i >= 1; i-= 2) {
            let row = i * i;
            let temporaryMarble = i * 4 - 4;
            stone += row;  
            steps++;

            if (steps % 5 == 0) {
                lapis += temporaryMarble;
            } else {
                marble += temporaryMarble;
            }

            if (i <= 2 ) {
                gold += row;
                marble -= temporaryMarble;
            } 
        }
        let totalStone = Math.ceil((stone - base * base) * increment);
        let totalMarble = Math.ceil(marble * increment);
        let totalLapis = Math.ceil(lapis * increment);
        let totalGold = Math.ceil(gold * increment);
        let height = Math.floor(steps * increment);

        console.log (`Stone required: ${totalStone}`);
        console.log (`Marble required: ${totalMarble}`);
        console.log(`Lapis Lazuli required: ${totalLapis}`);
        console.log(`Gold required: ${totalGold}`);
        console.log(`Final pyramid height: ${height}`);

}
thePyraminOfKingDjoser(12,1)

// Stone required: 124
// Marble required: 84
// Lapis Lazuli required: 6
// Gold required: 1
// Final pyramid height: 4