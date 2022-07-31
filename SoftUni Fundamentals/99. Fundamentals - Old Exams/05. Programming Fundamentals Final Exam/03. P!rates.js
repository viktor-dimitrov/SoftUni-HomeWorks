function pirates(inputArr) {
    let list = {};
    let cityInfo;
    let command;
    let counter = 0;

    while((cityInfo = inputArr.shift()) != 'Sail') {
        let [city, people, gold ] = cityInfo.split('||');
        if (!list.hasOwnProperty(city)) {
            list[city] = {people: Number(people), gold: Number(gold)};
            counter++;
        } else {
            list[city].people += Number(people);
            list[city].gold += Number(gold);
        }
    }

    while((command = inputArr.shift()) != 'End') {
        let tokens = command.split('=>');
        let action = tokens.shift();
        let city = tokens.shift();
        

        switch(action) {
            case'Plunder':
            let victims = Number(tokens.shift());
            let plund = Number(tokens.shift());
            list[city].people -= victims;
            list[city].gold -= plund;

            if (list[city].people <= 0 || list[city].gold <= 0 ) {
                console.log(`${city} plundered! ${plund} gold stolen, ${victims} citizens killed.`);
                console.log(`${city} has been wiped off the map!`);
                delete list[city];
                counter--;
            } else {
                console.log(`${city} plundered! ${plund} gold stolen, ${victims} citizens killed.`);
            }
            break;

            case'Prosper':
            let benefit = Number(tokens.shift());
            if (benefit < 0) {
                console.log('Gold added cannot be a negative number!')
            } else {
                list[city].gold += benefit;
                console.log(`${benefit} gold added to the city treasury. ${city} now has ${list[city].gold} gold.`);
            }
            break;
        }


    }

    if (counter <= 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`); 
    } else {
        console.log(`Ahoy, Captain! There are {count} wealthy settlements to go to:`);

        for (let key in list) {
            console.log(`${key} -> Population: ${list[key].people} citizens, Gold: ${list[key].gold} kg`)
        }
    }




}
pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]))