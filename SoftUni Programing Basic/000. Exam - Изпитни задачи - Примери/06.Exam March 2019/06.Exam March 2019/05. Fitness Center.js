function fitnessCenter (input) {
    const fuckers = Number(input[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let protein = 0;
    
    let index = 1;

    for (let i = 1; i <= fuckers; i++) {
        let fuckerType = input[index];
        index++;
        
        switch (fuckerType) {
            case "Chest": chest++;break;
            case "Back": back++;break;
            case "Legs": legs++;break;
            case "Abs": abs++;break;
            case "Protein shake":protein++; proteinShake++;break;
            case "Protein bar": protein++; proteinBar++;break;
        }

    }
    let proteinPercent = (protein / fuckers * 100).toFixed(2);
    let fuckersPercent = (100 - proteinPercent).toFixed(2);

    console.log (`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${fuckersPercent}% - work out`);
    console.log(`${proteinPercent}% - protein`);
}
fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
