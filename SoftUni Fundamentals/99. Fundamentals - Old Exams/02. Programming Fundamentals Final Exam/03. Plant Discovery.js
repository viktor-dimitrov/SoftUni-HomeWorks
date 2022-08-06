function plantDiscovery(inputArray) {
    let count = Number (inputArray.shift());
    let plants = {};

    for(let i = 0; i < count; i++) {
       let line = inputArray.shift();
       let[name, rarity] = line.split('<->');
       
       if (!plants.hasOwnProperty(name)) {
        plants[name] = {};
       }
       plants[name].rarity = Number(rarity); 
       plants[name].rate = [];
    }

    let command;

    while((command = inputArray.shift()) != "Exhibition") {
        let tokens = command.split(': ');
        let action = tokens.shift();
        
        switch(action) {
            case'Rate':
            let [name, rate] = tokens.shift().split(' - ');
            if (!plants.hasOwnProperty(name)){
                console.log('error')
            } else {
                plants[name].rate.push(Number(rate));
            }
           
            break;

            case'Update':
            let [nameU, rarity] = tokens.shift().split(' - ');
            if (!plants.hasOwnProperty(nameU)) {
                console.log('error');
            } else {
                plants[nameU].rarity = Number(rarity);
            }
            

            break;

            case'Reset':
            let nameR = tokens.shift();
            if (!plants.hasOwnProperty(nameR)) {
                console.log('error')
            } else {
                plants[nameR].rate = [];

            }
           
            break;
        }
    }

    console.log('Plants for the exhibition: ');
    
    for (let info in plants) {
        let average = 0
        if (plants[info].rate.length > 0) {
            average = plants[info].rate.reduce((a, b) => a + b  ) / plants[info].rate.length;
        }
        
        
        console.log(`- ${info}; Rarity: ${plants[info].rarity}; Rating: ${average.toFixed(2)}`)
        
    }
}
plantDiscovery ((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Reset: Arnoldii",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Exhibition"]))