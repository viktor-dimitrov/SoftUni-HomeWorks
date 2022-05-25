function newHouse(input) {
  const priceOfRose = 5;
  const priceOfDahilia = 3.8;
  const priceOfTulips = 2.8;
  const priceOfNarcis = 3;
  const priceOfGladious = 2.5;
  const typeOfFlower = input[0];
  const numberOfFlower = Number(input[1]);
  const budget = Number(input[2]);
  let totalMoney = 0;

  switch (typeOfFlower) {
    case "Roses":
      if (numberOfFlower > 80) {
        totalMoney -= numberOfFlower * priceOfRose * 0.1;
      }
      totalMoney += numberOfFlower * priceOfRose;
      break;
    case "Dahlias":
      if (numberOfFlower > 90) {
        totalMoney -= numberOfFlower * priceOfDahilia * 0.15;
      }
      totalMoney += numberOfFlower * priceOfDahilia;
      break;
    case "Gladiolus":
      if (numberOfFlower < 80) {
        totalMoney += numberOfFlower * priceOfGladious * 0.2;
      }
      totalMoney += numberOfFlower * priceOfGladious;
      break;
    case "Tulips":
      if (numberOfFlower > 80) {
        totalMoney -= numberOfFlower * priceOfTulips * 0.15;
      }
      totalMoney += numberOfFlower * priceOfTulips;
      break;
    case "Narcissus":
      if (numberOfFlower < 120) {
        totalMoney += numberOfFlower * priceOfNarcis * 0.15;
      }
      totalMoney += numberOfFlower * priceOfNarcis;
      break;
  }
  if (budget >= totalMoney) {
    const moneyLeft = budget - totalMoney;
    console.log(
      `Hey, you have a great garden with ${numberOfFlower} ${typeOfFlower} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    const moneyNeeded = totalMoney - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
newHouse(["Narcissus", "121", "360"]);
