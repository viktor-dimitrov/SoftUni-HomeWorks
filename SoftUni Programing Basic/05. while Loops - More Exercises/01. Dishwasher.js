function dishwasher(input) {
  const bottles = Number(input[0]);
  let allDetergent = bottles * 750;
  const plateDetergent = 5;
  const potDetergent = 15;
  let index = 1;
  let command = input[index];
  let platesCounter = 0;
  let potsCounter = 0;

  while (allDetergent >= 0) {
    if (command == "End") {
      break;
    }
    let vessel = Number(command);
    if (index % 3 == 0) {
      allDetergent -= vessel * potDetergent;
      potsCounter += vessel;
    } else {
      allDetergent -= vessel * plateDetergent;
      platesCounter += vessel;
    }
    index++;
    command = input[index];
  }
  if (allDetergent >= 0) {
    console.log(`Detergent was enough!`);
    console.log(`${platesCounter} dishes and ${potsCounter} pots were washed.`);
    console.log(`Leftover detergent ${allDetergent} ml.`);
  } else {
    console.log(
      `Not enough detergent, ${Math.abs(allDetergent)} ml. more necessary!`);
  }
}
dishwasher([1, 10, 15, 10, 12, 13, 30]);
