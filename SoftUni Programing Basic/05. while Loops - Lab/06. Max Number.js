function maxNumber(input) {
  let index = 0;
  let maxNum = Number.MIN_SAFE_INTEGER;

  let command = input[index];
  index++;

  while (command != "Stop") {
    let num = Number(command);
    if (maxNum < num) {
      maxNum = num;
    }

    command = input[index];
    index++;
  }
  console.log(maxNum);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
