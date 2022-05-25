function vacation(input) {
  let index = 0;
  let neededMoney = Number(input[index]);
  index++;
  let currentMoney = Number(input[index]);
  index++;
  let spendDaysCounter = 0;
  let daysCounter = 0;

  while (currentMoney < neededMoney) {
    let action = input[index];
    index++;
    let money = Number(input[index]);
    index++;

    daysCounter++;

    switch (action) {
      case "spend":
        spendDaysCounter++;
        currentMoney -= money;
        if (currentMoney < 0) {
          currentMoney = 0;
        }
        break;

      case "save":
        spendDaysCounter = 0;
        currentMoney += money;
        break;
    }

    if (spendDaysCounter >= 5) {
      console.log(`You can't save the money.`);
      console.log(`${daysCounter}`);
      break;
    }
  }
  if (currentMoney >= neededMoney) {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
