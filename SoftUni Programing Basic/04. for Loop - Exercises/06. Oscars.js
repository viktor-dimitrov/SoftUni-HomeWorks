function oscars (input) {
    index = 0;
    let actorName = String (input[index]);
    index++;
    let points = Number (input[index]);
    index++;
    let juryCount = Number (input[index]);
    index++;

    for (let i = 0; i < juryCount; i++) {
        let juryName =  (input[index]);
        index++;
        let juryPoints = (input[index])
        index++;
        points += (juryName.length * juryPoints) / 2;
        
        if (points >= 1250.5) {
            console.log (`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
            ; break;
        }
    }
    const difference = Math.abs ( 1250.5 - points);
    if (points < 1250.5) {
        console.log (`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }
}
oscars (["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

