function cake(input) {
  const a = Number(input[0]);
  const b = Number(input[1]);
  let cakeSpace = a * b;
  let index = 2;
  let command = input[index];
  index++;

  while (cakeSpace >= 0) {
    if (command === "STOP") {
      break;
    }
    let pieces = Number(command);
    cakeSpace -= pieces;
    command = input[index];
    index++;
  }

  let difference = Math.abs(cakeSpace);

  if (cakeSpace < 0) {
    console.log(`No more cake left! You need ${difference} pieces more.`);
  } else {
    console.log(`${cakeSpace} pieces are left.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
