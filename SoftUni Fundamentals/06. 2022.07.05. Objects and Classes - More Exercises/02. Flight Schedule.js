function flightSchedule (inputArray) {
    let status = String(inputArray[2]);
    
    let flightsArray = [];
    let changedStat = '';

    for (let line of inputArray[0]) {
        let lineSplit = line.split(' ');
        let code = lineSplit.shift();
        let dest = lineSplit.join(' ');
        flightsArray.push(dest);
        flightsArray.push(code);
    }
     for (let line of inputArray[1]) {
        let lineSplit = line.split(' ');
        let code = lineSplit.shift();
        let stat = lineSplit.join(' ');
        changedStat = stat;

        if (flightsArray.includes(code)) {
            flightsArray.splice(flightsArray.indexOf(code), 1, stat)
        }
       
     }
     for(let i = 1;i < flightsArray.length + 1; i +=2) {
        if(flightsArray[i] != changedStat) {
            flightsArray[i] = 'Ready to fly';
        }
     }

     let index = 0;
     let command = flightsArray[index];

     let newArray = [];

     while(command) {
        let newObject = {};
        let destination = command; 
        index++;
        command = flightsArray[index];
        let status = command;
        index++;
        command = flightsArray[index];
        newObject.Destination = destination;
        newObject.Status = status;
        newArray.push(newObject);
     }

     for(let element of newArray) {
        if (status === 'Ready to fly') {
            if(element.Status === status){
                console.log(element);
            }
        } else {
            if(element.Status === status) {
                console.log(element);
            }
        }
     }

}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']

])

