function arenaTier(input) {
    let myObject = {};

    for (let command of input) {
        if (command === 'Ave Cesar') {
            break;
        }
        if (!isNaN(command[command.length - 1])) {
            let [name, tech, skill] = command.split(' -> ');
            if (!myObject.hasOwnProperty(name)) {
                myObject[name] = {};
            }
            if (!myObject[name].hasOwnProperty(tech)) {
                myObject[name][tech] = Number.MIN_SAFE_INTEGER;
            }
            if (skill > (myObject[name][tech])) {
                myObject[name][tech] = skill;
            }

        } else {
            let [firstGlad, secondGlad] = command.split(' vs ');

            if (!myObject.hasOwnProperty([firstGlad]) || !myObject.hasOwnProperty([secondGlad])) {
                continue;

            } else {
                for (let tech1 of Object.keys(myObject[firstGlad])) {
                    if (!Object.keys(myObject[secondGlad]).includes(tech1)) {
                        continue;
                    } else {
                        for (let tech2 of Object.keys(myObject[secondGlad])) {
                            if (Number(myObject[firstGlad][tech1] > Number(myObject[secondGlad][tech2]))) {
                                delete myObject[secondGlad];
                                break;
                            } else if (Number(myObject[firstGlad][tech1] < Number(myObject[secondGlad][tech2]))) {
                                delete myObject[firstGlad];
                                break;
                            } else {
                                continue;
                            }
                        }
                    }
                }
            }
        }
    }

    let newObject = {};

    for (let name in myObject) {
        let sum = 0;
        for (let tech in myObject[name]) {
            sum += Number(myObject[name][tech]);
        }
        newObject[name] = sum;
    }

    let sortByName = Object.entries(newObject).sort((a, b) => a[0].localeCompare(b[0]));
    let objectSortByName = {};
    sortByName.forEach(element => {
        objectSortByName[element[0]] = element[1];
    });
    let sortByPoints = Object.entries(objectSortByName).sort((a, b) => b[1] - a[1]);
    let objectSortByPoints = {};
    sortByPoints.forEach(element => {
        objectSortByPoints[element[0]] = element[1]
    });

    for (let name in objectSortByPoints) {
        let sortByTech = Object.entries(myObject[name]).sort((a, b) => a[0].localeCompare(b[0]))
        let objectSortByTech = {};
        sortByTech.forEach(element => {
            objectSortByTech[element[0]] = element[1];
        });
        let sortBySkills = Object.entries(objectSortByTech).sort((a, b) => b[1] - a[1]);

        console.log(`${name}: ${objectSortByPoints[name]} skill`);
        sortBySkills.forEach(tech => {
            console.log(`- ${tech.join(' <!> ')}`);
        });
    }
}
arenaTier([
    'Peter -> Heal -> 100',
    'Julius -> Shield -> 700',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Peter',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ])