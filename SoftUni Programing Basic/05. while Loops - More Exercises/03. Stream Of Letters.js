function streamOfLetters(input) {
  let index = 0;
  let letter = input[index];
  let word = "";
  let text = "";
  let c = 0;
  let o = 0;
  let n = 0;

  while (letter != "End") {
    if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) {
      if (c == 0 || o == 0 || n == 0) {
        switch (letter) {
          case "c":
            c++;
            break;
          case "o":
            o++;
            break;
          case "n":
            n++;
            break;
        }
      }
      if (c >= 1 && o >= 1 && n >= 1) {
        text += `${word} `;
        word = "";
        c = 0;
        o = 0;
        n = 0;
        index++;
        letter = input[index];
        continue;
      }

      if (letter === "c" && c == 1) {
        index++;
        letter = input[index];
        continue;
      } else if (letter === "o" && o == 1) {
        index++;
        letter = input[index];
        continue;
      } else if (letter === "n" && n == 1) {
        index++;
        letter = input[index];
        continue;
      }

      word += letter;
    }
    index++;
    letter = input[index];
  }
  console.log(text);
}
streamOfLetters([
  "o",
  "S",
  "%",
  "o",
  "l",
  "^",
  "v",
  "e",
  "c",
  "n",
  "&",
  "m",
  "e",
  "c",
  "o",
  "n",
  "End",
]);
