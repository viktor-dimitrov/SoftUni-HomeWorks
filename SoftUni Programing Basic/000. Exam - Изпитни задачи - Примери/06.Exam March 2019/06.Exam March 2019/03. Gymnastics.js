function gymnastics (input) {
    const nation = input[0];
    const tool = input[1];
    let diffPoints = 0;
    let exePoints = 0;

    if (nation == "Russia") {
        switch(tool) {
            case "ribbon": diffPoints = 9.1 ; exePoints = 9.4; break;
            case "hoop": diffPoints = 9.3; exePoints = 9.8; break;
            case "rope": diffPoints = 9.6; exePoints = 9; break;
        }
    } else if (nation == "Bulgaria") {
        switch(tool) {
            case "ribbon": diffPoints = 9.6 ; exePoints = 9.4; break;
            case "hoop": diffPoints = 9.55; exePoints = 9.75; break;
            case "rope": diffPoints = 9.5; exePoints = 9.4; break;
        }
    } else if (nation == "Italy") {
        switch(tool) {
            case "ribbon": diffPoints = 9.2 ; exePoints = 9.5; break;
            case "hoop": diffPoints = 9.45; exePoints = 9.35; break;
            case "rope": diffPoints = 9.7; exePoints = 9.15; break;
        }
    }

    let allPoints = (diffPoints + exePoints).toFixed(3);
    let difference = ((20 - allPoints) /20 * 100).toFixed(2);
    console.log(`The team of ${nation} get ${allPoints} on ${tool}.`);
    console.log(`${difference}%`);
}
gymnastics (["Bulgaria",
"ribbon"])
