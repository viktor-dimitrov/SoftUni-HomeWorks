function meetings(inputArray) {
    let myObject = {};

    for(let line of inputArray) {
        let [day, name] = line.split(' ');
        
        if(myObject.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            myObject[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let el in myObject) {
        console.log(`${el} -> ${myObject[el]}`)
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])