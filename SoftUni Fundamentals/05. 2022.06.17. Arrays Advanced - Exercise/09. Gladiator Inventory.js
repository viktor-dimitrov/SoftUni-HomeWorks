function gladiatorInventory(input) {
    let myArray = input.join(',').split(',');
    let equipArray = myArray.shift().split(' ');
    
    for (let i = 0; i < myArray.length; i++) {
        let commandArray = myArray[i].split(' ');
        let command = commandArray[0];
        let item = commandArray[1];

        switch(command) {
            case'Buy': 
            if (!equipArray.includes(item)) {
                equipArray.push(item);
            }
            break;

            case'Trash':
            if (equipArray.includes(item)) {
                equipArray.splice(equipArray.indexOf(item), 1);
            }
            break;

            case'Repair':
            if (equipArray.includes(item)) {
                equipArray.splice(equipArray.indexOf(item), 1);
                equipArray.push(item);
            }
            break;

            case'Upgrade':
            let upArray = item.split('-');
            
            if (equipArray.includes(upArray[0])) {
                equipArray.splice((equipArray.indexOf(upArray[0]) + 1), 0, `${upArray[0]}:${upArray[1]}`);
            }
            break;
        }
       
    }
    console.log(equipArray.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])