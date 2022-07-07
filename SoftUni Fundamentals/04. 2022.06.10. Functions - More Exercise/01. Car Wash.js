function carWash (input) {
    let inputL = input.length;
    let cleanPercent = 0

    for (let element of input) {
        let action = element;
        switch(action) {
        case'soap': cleanPercent += 10; break;
        case'water': cleanPercent *= 1.2; break;
        case'vacuum cleaner': cleanPercent *= 1.25; break;
        case'mud': cleanPercent *= 0.9; break;

        }
    }
    console.log(`The car is ${cleanPercent.toFixed(2)}% clean.`)
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])