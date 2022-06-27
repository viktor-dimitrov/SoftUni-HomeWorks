function movingTarget(input) {
    let targetsArray = input.shift().split(' ').map(Number);
    let commandArray = input.slice();

    let targetsL = targetsArray.length;

    let index = 0;
    let commandLine = input[index];

    while (commandLine) {
        if (commandLine == "End") {
            break;
        }
        let line = commandLine.split(' ');
        let command = line[0];
        let target = Number(line[1]);
        let value = Number(line[2]);

        if (target < 0 || target > targetsL - 1) {
            if (command == 'Add') {
                console.log("Invalid placement!");
            }
            index++;
            commandLine = commandArray[index];
            continue;
        }

        switch (command) {
            case 'Shoot': targetsArray.splice(target, 1, (targetsArray[target] - value));
                if (targetsArray[target] <= 0) {
                    targetsArray.splice(target, 1);
                }
                break;

            case 'Add': targetsArray.splice(target, 0, value);
                break;

            case 'Strike':
                let radius = value * 2 + 1;
                let radius1 = target - value;
                let radius2 = target + value;

                if (radius1 < 0 || radius2 > targetsL - 1 || target < 0 || target > targetsL - 1) {
                    console.log("Strike missed!");
                } else {
                    targetsArray.splice(radius1, radius);
                }
                break;
        }

        index++;
        commandLine = commandArray[index];
        
       
    }
    console.log(targetsArray.join('|'));
}
movingTarget (["0 1 2",
"Strike 1 1",
"Add 20",
"End"])