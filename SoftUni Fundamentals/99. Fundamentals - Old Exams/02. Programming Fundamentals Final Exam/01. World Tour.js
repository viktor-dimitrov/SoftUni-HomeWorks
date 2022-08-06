function worldTour(inputArr) {
    let stops = inputArr.shift();
    let index = 0;
    let command = inputArr[index];

    while (command !== "Travel") {
        let tokens = command.split(':');
        let action = tokens.shift();

        switch (action) {
            case 'Add Stop': if ((Number(tokens[0])) >= 0 && (Number(tokens[0])) < stops.length) {
                let firstPart = stops.substring(0, tokens[0]);
                let secondPart = stops.substring(tokens[0])
                stops = (`${firstPart}${tokens[1]}${secondPart}`);
            }
                break;

            case 'Remove Stop': if (tokens[0] >= 0 && tokens[0] < stops.length && tokens[1] >= 0 && tokens[1] < stops.length) {
                let firstPart = stops.substring(0, tokens[0]);
                let sliceIndex = Number(tokens[1]) + 1
                let secondPart = stops.slice(sliceIndex);
                stops = (`${firstPart}${secondPart}`)
            }
                break;

            case 'Switch': stops = stops.replace(tokens[0], tokens[1])
                break;
        }
        console.log(stops)
        index++;
        command = inputArr[index];
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`)

}
worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))