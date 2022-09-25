function townPopulation(inputArr) {
    let myObj = {};

    for (let el of inputArr) {
        let [town, population] = el.split(' <-> ');

        if (!myObj.hasOwnProperty(town)) {
            myObj[town] = Number(population)
        } else {
            myObj[town] += Number(population);
        }
    }

    for (let key of Object.keys(myObj)) {
        console.log(`${key} : ${myObj[key]}`)
    }

}
townPopulation (['Sofia <-> 1200000',
'Montana <-> 20000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])