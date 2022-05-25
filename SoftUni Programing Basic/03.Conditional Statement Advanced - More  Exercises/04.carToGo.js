function carToGo(input) {
  const budget = Number(input[0]);
  const season = String(input[1]);
  let classType = "";
  let price = 0;
  let carType = "";

  if (budget <= 100) {
    classType = "Economy class";
  } else if (budget > 100 && budget <= 500) {
    classType = "Compact class";
  } else if (budget > 500) {
    classType = "Luxury class";
  }

  switch (classType) {
    case "Economy class":
      switch (season) {
        case "Summer":
          carType = "Cabrio";
          price = budget * 0.35;
          break;
        case "Winter":
          carType = "Jeep";
          price = budget * 0.65;
          break;
      }
      break;
    case "Compact class":
      switch (season) {
        case "Summer":
          carType = "Cabrio";
          price = budget * 0.45;
          break;
        case "Winter":
          carType = "Jeep";
          price = budget * 0.8;
          break;
      }
      break;
    default:
      carType = "Jeep";
      price = budget * 0.9;
      break;
  }
  console.log(classType);
  console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo([450, "Summer"]);
