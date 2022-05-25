function logistics(input) {
  index = 0;
  let cargoCount = Number(input[index]);
  index++;
  let minibusLoad = 0;
  let minibusPrice = 200;
  let truckLoad = 0;
  let truckPrice = 175;
  let trainLoad = 0;
  let trainPrice = 120;

  for (let i = 1; i <= cargoCount; i++) {
    let cargo = Number(input[index]);
    index++;

    if (cargo <= 3) {
      minibusLoad += cargo;
    } else if (cargo >= 4 && cargo <= 11) {
      truckLoad += cargo;
    } else if (cargo >= 12) {
      trainLoad += cargo;
    }
  }
  let totalLoad = truckLoad + trainLoad + minibusLoad;
  let totalPrice =
    minibusLoad * minibusPrice +
    truckLoad * truckPrice +
    trainLoad * trainPrice;
  console.log((totalPrice / totalLoad).toFixed(2));
  console.log(`${((minibusLoad / totalLoad) * 100).toFixed(2)}%`);
  console.log(`${((truckLoad / totalLoad) * 100).toFixed(2)}%`);
  console.log(`${((trainLoad / totalLoad) * 100).toFixed(2)}%`);
}
logistics([4, 1, 5, 16, 3]);
