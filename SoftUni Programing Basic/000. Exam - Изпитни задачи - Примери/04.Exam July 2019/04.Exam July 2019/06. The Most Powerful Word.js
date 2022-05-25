function theMostPowerfulWord (input) {
    let index = 0;
    let command = input[index];
    let totalPoints = 0;
    let winnerWord = "";

    while (command != "End of words") {
        let word = input[index];
        index++;
        let points = 0;
        for (let i = 0; i < word.length; i++) {
            let num = word.charCodeAt(i);
            points += num;
        }
        if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u" || word[0] == "y" || 
        word[0] == "A" || word[0] == "E" || word[0] == "I" || word[0] == "O" || word[0] == "U" || word[0] == "Y") {
            points *= word.length;
        } else {
            points = Math.floor(points / word.length);
        }

        if (points > totalPoints) {
            totalPoints = points;
            winnerWord = word;
        }
        
        command = input[index];
    }
    console.log(`The most powerful word is ${winnerWord} - ${totalPoints}`);
}
theMostPowerfulWord (["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])