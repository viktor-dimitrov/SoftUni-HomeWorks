function argumentInfo (...argArr) {

    let counters = {};
     
    argArr.forEach(element => {
        let type = typeof(element)
        console.log(`${type}: ${element}`);
        if (!counters.hasOwnProperty(type)) {
            counters[type] = 0;
        }
        counters[type]++;
    });

    let sorted = Object.entries(counters).sort((a, b) => b[1] - a[1]);

    for (let pair of sorted) {
        console.log(`${pair[0]} = ${pair[1]}`);
    }

}

argumentInfo ({ name: 'bob'}, 3.333, 9.999)