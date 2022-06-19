function houseParty(input) {
    let guestsList = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let guestName = command.shift();

        if (!command.includes('not')) {
            if (!guestsList.includes(guestName)) {
                guestsList.push(guestName);
            } else {
                console.log(`${guestName} is already in the list!`);
            }
        } else {
            if (guestsList.includes(guestName)) {
                guestsList.splice(guestsList.indexOf(guestName), 1);
            } else {
                console.log(`${guestName} is not in the list!`);

            }
        }
    }
    console.log(guestsList.join('\n'));
}
houseParty (['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])