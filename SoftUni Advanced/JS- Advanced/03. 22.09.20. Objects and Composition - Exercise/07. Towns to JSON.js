function townsToJSON (inputArr) {
    
    let paramsArray = inputArr.map(el => el.split('|').join('').trim().split('  '));
    let keys = paramsArray.shift();
    let arrOfObjects = [];

    for (let params of paramsArray) {
        let obj = {};
        obj[keys[0]] = params[0];
        obj[keys[1]] = Number(Number(params[1]).toFixed(2));
        obj[keys[2]] = Number(Number(params[2]).toFixed(2));
        arrOfObjects.push(obj);
    }
    output = JSON.stringify(arrOfObjects);
    console.log(output);
}
townsToJSON (['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])