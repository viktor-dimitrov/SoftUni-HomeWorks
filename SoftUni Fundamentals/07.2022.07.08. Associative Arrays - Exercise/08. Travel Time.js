function travelTime(inputArray) {
    let myObject = {};

    inputArray.forEach(line => {
        let [country, town, price] = line.split(' > ');
        if (!myObject.hasOwnProperty(country)) {
            myObject[country] = {};
        }
        if (!myObject[country].hasOwnProperty(town)) {
            myObject[country][town] = Number.MAX_SAFE_INTEGER;
        }
        if (price < (myObject[country][town])) {
            myObject[country][town] = price;
        }
    });

    for (let country in myObject) {
        let sortedArr = (Object.entries(myObject[country])).sort((a, b) => a[1] - b[1]);
        let stringsArr = [];
        sortedArr.forEach(str => {
            stringsArr.push(str.join(' -> '));
        });
        myObject[country] = stringsArr;
    }
    let sortedCountries = Object.keys(myObject).sort((a, b) => a.localeCompare(b));

    sortedCountries.forEach(el => {
        console.log(`${el} -> ${myObject[el].join(' ')}`);
    });
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 100",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])