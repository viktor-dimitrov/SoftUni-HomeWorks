function tournamentOfChristmas(input) {
  const daysCount = Number(input[0]);
  let totalMoney = 0;
  let winDays = 0;
  let loseDays = 0;
  let index = 1;
  for (let i = 1; i <= daysCount; i++) {
    let tempWins = 0;
    let tempLosts = 0;
    let tempMoney = 0;
    let command = input[index];
    while (command != "Finish") {
      index++;
      let endOfGame = input[index];
      switch (endOfGame) {
        case "win":
          tempWins++;
          tempMoney += 20;
          break;
        case "lose":
          tempLosts++;
          break;
      }
      index++;
      command = input[index];
    }
    if (tempWins > tempLosts) {
      tempMoney *= 1.1;
      totalMoney += tempMoney;
      winDays++;
    } else {
      totalMoney += tempMoney;
      loseDays++;
    }
    index++;
  }
  if (winDays > loseDays) {
    totalMoney *= 1.2;
    console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  }
}
tournamentOfChristmas([
  2,
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish",
]);
