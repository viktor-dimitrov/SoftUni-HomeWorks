function spiceMustFlow (spice) {

    let daysCount = 0;
    let yield = 0;

    for (let i = spice; i >= 100; i -= 10) {
        daysCount ++;
        let dayYield = Number(i);
        yield += dayYield;
        
    }
    let totalYield = yield - (daysCount * 26) - 26

    if (daysCount <= 0) {
        totalYield = 0;
    }

    console.log(daysCount);
    console.log(totalYield);
}
spiceMustFlow (100)