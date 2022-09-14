function hogwarts(inputArr) {
    let spell = inputArr.shift();
    let line;

    while ((line = inputArr.shift()) !== "Abracadabra") {
        let tokens = line.split(' ');
        let action = tokens.shift();

        switch (action) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell)
                break;

            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell)
                break;

            case 'Illusion':
                let index = Number(tokens.shift());
                let letter = tokens.shift();

                if (index < 0 || index > (spell.length - 1)) {
                    console.log('The spell was too weak.');
                } else {
                    let firstPart = spell.substring(0, index);
                    let secPart = spell.substring(index + 1);
                    spell = firstPart.concat(letter, secPart);
                    console.log('Done!')
                }
                break;

            case 'Divination':
                let firstSubstring = tokens.shift();
                let secSubstring = tokens.shift();
                if (spell.includes(firstSubstring)) {
                    while (spell.includes(firstSubstring)) {
                        spell = spell.replace(firstSubstring, secSubstring);
                    }
                    
                    console.log(spell)
                }
                break;

            case 'Alteration':
                let cropString = tokens.shift();
                if(spell.includes(cropString)) {
                    spell = spell.replace(cropString, '');
                    console.log(spell);
                }
               
                break;
            default: console.log(`The spell did not work!`)
        }
    }
}
hogwarts(["SwordMastar",
"Target Target Target",
"Abjuration",
"Necromancy",
"Divination a 1",
"Abracadabra"])