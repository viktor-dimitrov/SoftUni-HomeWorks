function emojiDtector (inputArr) {
    let text = inputArr.shift();
    let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let valid = pattern.exec(text);
    let threshold = 1;

    for (let char of text.split('')) {
        if (!isNaN(char) && char != ' ') {
             threshold *= Number(char);
        }
    }

    let coolOnes = [];
    let counter = 0;
   
    while (valid != null) {
        counter++;
        let emojiText = valid.groups.emoji;
        let fullEmoji = valid[0];
        let sum = 0;

        for(let l of emojiText) {
            sum += l.charCodeAt();
        }

        if (sum > threshold) {
            coolOnes.push(fullEmoji);
        }
        
        valid = pattern.exec(text);
    }

console.log(`Cool threshold: ${threshold}`);
console.log(`${counter} emojis found in the text. The cool ones are:`);
console.log(coolOnes.join('\n'));

}
emojiDtector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])