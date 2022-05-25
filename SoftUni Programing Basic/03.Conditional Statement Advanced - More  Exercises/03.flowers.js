function flowers(input) {
  const crysanthemumsCount = Number(input[0]);
  const rosesCount = Number(input[1]);
  const tulipsCount = Number(input[2]);
  const season = String(input[3]);
  const holyday = String(input[4]);
  const allFlowers = crysanthemumsCount + rosesCount + tulipsCount;
  let crysanthemumsPrice = 0;
  let rosesPrice = 0;
  let tulipsPrice = 0;

  switch (season) {
    case "Spring":
    case "Summer":
      crysanthemumsPrice = 2;
      rosesPrice = 4.1;
      tulipsPrice = 2.5;
      break;
    case "Autumn":
    case "Winter":
      crysanthemumsPrice = 3.75;
      rosesPrice = 4.5;
      tulipsPrice = 4.15;
      break;
  }
  let allFlowersPrice =
    crysanthemumsCount * crysanthemumsPrice +
    rosesCount * rosesPrice +
    tulipsCount * tulipsPrice;

  switch (holyday) {
    case "Y":
      allFlowersPrice += allFlowersPrice * 0.15;
      break;
  }

  if (season === "Spring" && tulipsCount > 7) {
    allFlowersPrice *= 0.95;
  } else if (season === "Winter" && rosesCount >= 10) {
    allFlowersPrice *= 0.9;
  }
  if (allFlowers > 20) {
    allFlowersPrice *= 0.8;
  }
  const totalSum = (allFlowersPrice + 2).toFixed(2);
  console.log(totalSum);
}
flowers([3, 10, 9, "Winter", "N"]);
