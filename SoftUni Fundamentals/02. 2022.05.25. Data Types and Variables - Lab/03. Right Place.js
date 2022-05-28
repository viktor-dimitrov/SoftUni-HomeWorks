function rightPlace (firstWord, char, secondWord) {
       let realWord = '';

       for (let i = 0; i < firstWord.length; i++) {
           let myChar = firstWord[i];
           if (myChar != '_') {
               realWord += myChar;
           } else {
               realWord += char;
           }
       }
       
       if (realWord === secondWord) {
           console.log ('Matched');
       } else {
           console.log ('Not Matched');
       }
}
rightPlace ('Str_ng', 'o', 'Strong')