function storeCatalogue(inputArr) {
    let sorted = inputArr.sort((a, b) => a.localeCompare(b));
    let obj = {};

    for (let el of sorted) {
        let firstChar = el[0];

        if (!obj.hasOwnProperty(firstChar)) {
            obj[firstChar] = [];
        }
        let word = el.split(' :').join(':');
        obj[firstChar].push(word);
    }
    for (let key in obj) {
        console.log(`${key}`);
        console.log(`${obj[key].join('\n')}`);
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)