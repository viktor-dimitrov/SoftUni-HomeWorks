function heroesOfCodeAndLogic(inputArr) {
    let count = Number(inputArr.shift());
    let heroes = {};

    for (let i = 0; i < count; i++) {
        let [name, hp, mp] = inputArr.shift().split(' ');
        heroes[name] = { HP: Number(hp), MP: Number(mp) };
    }

    line = inputArr.shift();
    while (line !== 'End') {

        let tokens = line.split(' - ');
        let action = tokens.shift();
        let name = tokens.shift();


        switch (action) {
            case 'Heal':
                let health = Number(tokens.shift());
                let diffH = Math.abs(100 - heroes[name].HP);
                if ((heroes[name].HP + health) >= 100) {
                    heroes[name].HP = 100;
                    console.log(`${name} healed for ${diffH} HP!`);
                } else {
                    heroes[name].HP += health;
                    console.log(`${name} healed for ${health} HP!`);
                }

                break;

            case 'Recharge':
                let mana = Number(tokens.shift());
                let diffM = Math.abs(200 - heroes[name].MP);
                if ((heroes[name].MP + mana) >= 200) {
                    heroes[name].MP = 200;
                    console.log(`${name} recharged for ${diffM} MP!`);
                } else {
                    heroes[name].MP += mana;
                    console.log(`${name} recharged for ${mana} MP!`);
                }
                break;

            case 'TakeDamage':
                let dmg = Number(tokens.shift());
                let enemy = tokens.shift();
                heroes[name].HP -= dmg;
                if (heroes[name].HP > 0) {
                    console.log(`${name} was hit for ${dmg} HP by ${enemy} and now has ${heroes[name].HP} HP left!`)
                } else {
                    console.log(`${name} has been killed by ${enemy}!`);
                    delete heroes[name];
                }
                break;

            case 'CastSpell':
                let spellDmg = Number(tokens.shift());
                let spellName = tokens.shift();
                if (spellDmg > heroes[name].MP) {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                } else {
                    heroes[name].MP -= spellDmg;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].MP} MP!`);

                }
                break;
        }



        line = inputArr.shift();
    }

    for (let hero in heroes) {
        console.log(hero);
        console.log(Object.entries(heroes[hero])[0].join(': '));
        console.log(Object.entries(heroes[hero])[1].join(': '));

    }
}
heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]
  
  )