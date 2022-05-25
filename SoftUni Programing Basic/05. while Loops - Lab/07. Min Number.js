function minNumber(input) {
  let index = 0;
  let minNum = Number.MAX_SAFE_INTEGER;
  let command = input[index];
  index++;

  while (command !== "Stop") {
    let num = Number(command);

    if (num < minNum) {
      minNum = num;
    }
    command = input[index];
    index++;
  }
  console.log(minNum);
}
minNumber(["100", "99", "80", "70", "Stop"]);
