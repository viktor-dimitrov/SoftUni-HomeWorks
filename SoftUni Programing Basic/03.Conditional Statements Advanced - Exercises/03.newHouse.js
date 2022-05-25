function newHouse(input) {
  const rosesPrice = 5;
  const dahliasPrice = 3.8;
  const tulipsPrice = 2.8;
  const narcissusPrice = 3;
  const gladiolusPrice = 2.5;
  const flowerType = String (input[0]);
  const flowerCount = Number (input[1]);
  const budget = Number (input[2]);
  let totalSum = 0;

  switch (flowerType) {
      case "Roses": totalSum = rosesPrice * flowerCount;
      if (flowerCount > 80) {
          totalSum *= 0.9;
      } break;
      case "Dahlias": totalSum = dahliasPrice * flowerCount;
      if (flowerCount > 90) {
          totalSum *= 0.85;
      } break;
      case "Tulips": totalSum = tulipsPrice * flowerCount;
      if (flowerCount > 80) {
          totalSum *= 0.85;
      } break;
      case "Narcissus": totalSum = narcissusPrice * flowerCount;
      if (flowerCount < 120) {
          totalSum *= 1.15;
      } break;
      case "Gladiolus": totalSum = gladiolusPrice * flowerCount;
      if (flowerCount < 80) {
          totalSum *= 1.2;
      } break; 
    }
    const difference = Math.abs(budget - totalSum);

    if (budget >= totalSum) {
        console.log (`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${difference.toFixed(2)} leva left.`)
    } else {
        console.log (`Not enough money, you need ${difference.toFixed(2)} leva more.`)
    }
}

newHouse (["Narcissus", "100", "250"]);
