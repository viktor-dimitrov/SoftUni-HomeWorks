function town(inputArray) {

    let myObject = {};

    for (let data of inputArray) {
        let dataArray = data.split(' | ');
        myObject.town = dataArray[0];
        myObject.latitude = Number(dataArray[1]).toFixed(2);
        myObject.longitude = Number(dataArray[2]).toFixed(2);
        console.log(myObject)

    }

}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)