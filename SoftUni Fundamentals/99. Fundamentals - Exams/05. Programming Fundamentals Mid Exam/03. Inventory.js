function inventory(input) {
    let itemsArray = input.shift().split(', ');
    let index = 0;
    let comLine = input[index];

    while (comLine) {
        if (comLine == 'Craft!') {
            break;
        }

        let comArray = comLine.split(' - ');
        let command = comArray[0];
        let item = comArray[1];
      
        switch(command) {
            case'Collect':
            if (!itemsArray.includes(item)) {
                itemsArray.push(item);
            }
            break;

            case'Drop':
            if (itemsArray.includes(item)) {
                itemsArray.splice(itemsArray.indexOf(item), 1);
            }
            break;

            case'Combine Items':
            let splitItems = item.split(':');
            let oldItem = splitItems[0];
            let newItem = splitItems[1];

            if (itemsArray.includes(oldItem)) {
                itemsArray.splice(itemsArray.indexOf(oldItem) + 1, 0, newItem);
            }
            break;

            case'Renew':
            if (itemsArray.includes(item)) {
                itemsArray.splice(itemsArray.indexOf(item), 1);
                itemsArray.push(item)
            }
            break;
        }
        
        index++;
        comLine = input[index];
    }
    return itemsArray.join(', ')
}
console.log(inventory([
    'Iron, Sword, asefs',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]))