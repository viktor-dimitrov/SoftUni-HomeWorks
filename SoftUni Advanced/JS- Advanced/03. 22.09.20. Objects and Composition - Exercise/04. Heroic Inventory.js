function heroicInventory(inputArr) {
    let arrayOfObjects = [];

    for (let hero of inputArr) {
        let line = hero.split(' / ');
        let obj = {};
        let name = line.shift();
        let level = line.shift();
        let items = [];

        if (line.length > 0) {
            items = line[0].split(', ');
        }

        obj.name = name;
        obj.level = Number(level);
        obj.items = items;

        arrayOfObjects.push(obj);
    }

    let result = JSON.stringify(arrayOfObjects);

    console.log(result);
}
heroicInventory(['Isacc / 25 ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])