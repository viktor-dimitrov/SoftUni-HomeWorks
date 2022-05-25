function footballLeague(input) {
    index = 0;
    let capacity = Number (input[index]);
    index++;
    let fansCount = Number (input[index]);
    index++;
    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;

    for (let i = 0; i < fansCount; i++) {
        let fan = String (input[index]);
        index++;
        switch (fan) {
            case "A": a++; break;
            case "B": b++; break;
            case "V": v++; break;
            case "G": g++; break;
        }
    }
    let allFans = (a + b + v + g) / capacity * 100;
    console.log(`${(a / fansCount * 100).toFixed(2)}%`);
    console.log(`${(b / fansCount * 100).toFixed(2)}%`);
    console.log(`${(v / fansCount * 100).toFixed(2)}%`);
    console.log(`${(g / fansCount * 100).toFixed(2)}%`);
    console.log (`${allFans.toFixed(2)}%`);
}
footballLeague([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
