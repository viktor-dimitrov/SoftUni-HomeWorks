function renovation (input) {
    const h = Number(input[0]);
    const w = Number(input[1]);
    const noPaintPercent = Number(input[2]);
    let walls = Math.ceil((h * w * 4) - (noPaintPercent * (h * w * 4) / 100));
    let paintedWalls = 0;
    let index = 3;
    let command = input[index];

    while (command != `Tired!`) {
        let paint = Number(input[index]);
        index++;
        command = input[index];
        paintedWalls += (paint);
        if (paintedWalls >= walls) {
            break;
        }
    }
    let difference = Math.abs (walls - paintedWalls);
    
    if (paintedWalls == walls) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }
     else if (paintedWalls > walls) {
        console.log(`All walls are painted and you have ${difference} l paint left!`);
    } else {
        console.log(`${difference} quadratic m left.`)
    }
}

renovation (["2",
"3",
"25",
"6",
"7",
"8",
`Tired!`])