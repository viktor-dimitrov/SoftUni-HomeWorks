function harvest(input) {
    const area = Number (input[0]);
    const grapeForSquare = Number (input[1]);
    const neededWine = Number (input[2])
    const workersCount = Number (input[3]);
    const allGrape = area * grapeForSquare;
    const totalWine = (allGrape * 0.4) / 2.5;
    const badDifference = Math.abs (neededWine - totalWine);
    const winePerWorker = Math.ceil (badDifference / workersCount);
 if (totalWine < neededWine) {
     console.log (`It will be a tough winter! More ${Math.floor(badDifference)} liters wine needed.`);
 } else {
     console.log (`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`)
     console.log (`${Math.ceil(badDifference)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`)
 }
}

harvest([650, 2, 175, 3]);
harvest ([1020, 3, 425, 3])

