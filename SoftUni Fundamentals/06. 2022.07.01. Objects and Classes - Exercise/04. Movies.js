function movies(inputArray) {

    let dataArray = [];

    for (let line of inputArray) {
        let myLine = line.split(' ');
        if (myLine.includes('addMovie')) {
            myLine.shift();
            dataArray.push({ name: myLine.join(' ') });

        } else if (myLine.includes("directedBy")) {
            let myMovieName = myLine.slice(0, myLine.indexOf('directedBy')).join(' ');
            let myDirector = myLine.slice(myLine.indexOf('directedBy') + 1).join(' ');

            for (let element of dataArray) {
                if (element.name === myMovieName) {
                    element.director = myDirector;
                }
            }
        } else if (myLine.includes('onDate')) {
            myLine.splice(myLine.indexOf('onDate'), 1);
            let date = myLine.pop();
            let name = myLine.join(' ');

            for (let element of dataArray) {
                if (element.name === name) {
                    element.date = date;
                }
            }
        }
    }

    for (let obj of dataArray) {
        if (obj.name && obj.date && obj.director) {
            console.log(JSON.stringify(obj))
        }
    }
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])