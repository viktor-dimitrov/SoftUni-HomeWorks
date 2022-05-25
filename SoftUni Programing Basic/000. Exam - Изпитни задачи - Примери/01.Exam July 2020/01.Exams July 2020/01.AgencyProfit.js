function agencyProfit(input) {
  const companyName = String(input[0]);
  const adultTicketsCount = Number(input[1]);
  const childTicketsCount = Number(input[2]);
  const adultTicketPrice = Number(input[3]);
  const serviceTax = Number(input[4]);

  const childTicketPrice = adultTicketPrice * 0.3;

  const totalTickesPrice =
    (adultTicketPrice + serviceTax) * adultTicketsCount +
    (childTicketPrice + serviceTax) * childTicketsCount;
  const interest = totalTickesPrice * 0.2;

  console.log(`The profit of your agency from ${companyName} tickets is ${interest.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir", 15, 5, 120, 40]);
