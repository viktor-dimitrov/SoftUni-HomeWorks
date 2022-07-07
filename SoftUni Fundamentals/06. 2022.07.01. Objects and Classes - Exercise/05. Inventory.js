function inventory(inputArray) {

    let myArray = [];

    for (let line of inputArray) {
        let lineArray = line.split(' / ');
        let heroName = lineArray.shift();
        let heroLevel = Number(lineArray.shift());
        let heroItems = String(lineArray);

        myArray.push({ Hero: heroName, level: heroLevel, items: heroItems });
    }

    let sortedArray = myArray.sort((a, b) => a.level - b.level);

    sortedArray.forEach((obj) => {
        console.log(`Hero: ${obj.Hero}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    })

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])