function theImitationGame(inputArr) {
    let message = inputArr.shift();
    let line;

    while ((line = inputArr.shift()) != 'Decode') {
        let tokens = line.split('|');
        let action = tokens.shift();

        switch (action) {
            case 'Move':
                let count = Number(tokens.shift());
                let crop = message.substring(0, count);
                let mess = message.substring(count);
                message = mess.concat(crop);
                break;

            case 'Insert':
                let index = Number(tokens.shift());
                let value = tokens.shift();
                let firstPart = message.substring(0, index);
                let secPart = message.substring(index);
                message = firstPart.concat(value, secPart);

                break;

            case 'ChangeAll':
                let oldChar = tokens.shift();
                let newChar = tokens.shift();
                while (message.includes(oldChar)) {
                    message = message.replace(oldChar, newChar);
                }
                break;
        }
    }

    console.log(`The decrypted message is: ${message}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])