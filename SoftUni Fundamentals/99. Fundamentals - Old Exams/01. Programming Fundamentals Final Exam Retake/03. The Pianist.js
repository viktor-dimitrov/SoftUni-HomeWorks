function thePianist(input) {
    let count = Number(input.shift());
    let myList = new Map();

    for (let i = 0; i < count; i++) {
        let line = input.shift().split('|');
        let piece = line[0];
        let composer = line[1];
        let key = line[2]
        myList.set(piece, [composer, key]);
    }

    let index = 0;
    let command = input[index];

    while (command != 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();

        switch (action) {
            case 'Add': 
                if (!myList.has(tokens[0])) {
                    myList.set(tokens[0], [tokens[1], tokens[2]]);
                    console.log(`${tokens[0]} by ${tokens[1]} in ${tokens[2]} added to the collection!`)
                } else {
                console.log(`${tokens[0]} is already in the collection!`);
                }
                break;
            
            case 'Remove':
                if (myList.has(tokens[0])) {
                    myList.delete(tokens[0]);
                    console.log(`Successfully removed ${tokens[0]}!`);
                } else {
                    console.log(`Invalid operation! ${tokens[0]} does not exist in the collection.`);
                }
                break; 
            case'ChangeKey':  if (myList.has(tokens[0])) {
                console.log(`Changed the key of ${tokens[0]} to ${tokens[1]}!`);
                myList.get(tokens[0]).pop();
                myList.get(tokens[0]).push(tokens[1]);
            } else {
                console.log(`Invalid operation! ${tokens[0]} does not exist in the collection.`);
            }  
        }

        index++;
        command = input[index];
    }

    for (let key of Array.from(myList.keys())) {
    
        console.log(`${key} -> Composer: ${myList.get(key)[0]}, Key: ${myList.get(key)[1]}`);
    }
    
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])