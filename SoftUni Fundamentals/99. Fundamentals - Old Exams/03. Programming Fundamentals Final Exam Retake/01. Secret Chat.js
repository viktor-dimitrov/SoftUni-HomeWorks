function secretChat(inputArray) {
    let chat = inputArray.shift();
    let index = 0;
    command = inputArray[index];

    while (command) {
        if (command === 'Reveal') {
            break;
        }
        let tokens = command.split(':|:');
        let action = tokens.shift();

        switch (action) {
            case 'InsertSpace':
                let givenIndex = Number(tokens[0]);
                chat = chat.split('');
                chat.splice(givenIndex, 0, ' ');
                chat = chat.join('');
                break;

            case 'Reverse':

                let text = tokens[0];
                if (chat.includes(text)) {
                    chat = chat.replace(text, '');
                    chat = chat.split('');
                    text = text.split('').reverse();
                    chat.push(text.join(''));
                    chat = chat.join('')
                } else {
                    console.log('error')
                    index++;
                    command = inputArray[index];
                    continue;
                }
                break;

            case 'ChangeAll':
                while (chat.includes(tokens[0])) {
                    chat = chat.replace(tokens[0], tokens[1]);
                }
                break;
        }

        index++;
        command = inputArray[index];
        console.log(chat)
    }
    console.log(`You have a new text message: ${chat}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])