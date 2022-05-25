function cinema (input) {
  const premierPrice = 12;
  const normalPrice = 7.5;
  const discountPrice = 5;
  const tickets = String(input[0]);
  const rows = Number (input[1]);
  const cols = Number (input[2]);
  const places = rows * cols;
  let price = 0;

  switch (tickets) {
      case "Premiere": price = premierPrice * places; break;
      case "Normal": price = normalPrice * places; break;
      case "Discount": price = discountPrice * places; break;
  }
  console.log (`${price.toFixed(2)} leva `)
}

cinema(["Premiere", "10", "12"]);
