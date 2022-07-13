function legendaryFarming(inputString) {
    let way = inputString.toLowerCase().split(' ');
    let wayL = way.length;
    let myMap = new Map([['fragments', 0], ['motes', 0], ['shards', 0]]);
    let junkMap = new Map;

    for (let i = 0; i < wayL - 1; i += 2) {
        let pts = Number(way[i]);
        let material = way[i + 1];

        if (myMap.has(material)) {

            myMap.set(material, (myMap.get(material) + pts));
            if (myMap.get('fragments') >= 250) {
                myMap.set('fragments', Math.abs(myMap.get('fragments') - 250));
                console.log('Valanyr obtained!');
                break;
            } else if (myMap.get('motes') >= 250) {
                myMap.set('motes', Math.abs(myMap.get('motes') - 250));
                console.log(`Dragonwrath obtained!`);
                break;
            } else if (myMap.get('shards') >= 250) {
                myMap.set('shards', Math.abs(myMap.get('shards') - 250));
                console.log(`Shadowmourne obtained!`);
                break;
            }
        } else {
            if(!junkMap.has(material)) {
            junkMap.set(material, pts);
            } else {
                junkMap.set(material, (junkMap.get(material) + pts))
            }
            
        } 
    }
    let legendaryArr = Array.from(myMap.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    let junkArr = Array.from(junkMap.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));

    legendaryArr.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });

    junkArr.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);

    });

}





legendaryFarming('123 silver 0 shards 25 shards 3 fangs 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')