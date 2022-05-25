function movieProfit (input) {
    const movieName = input [0];
    const daysCount = Number(input[1]);
    const ticketsCount = Number(input[2]);
    const priceForTicket = Number(input[3]);
    const percentForCinema = Number(input[4]);

    const sumForAllDays = priceForTicket * ticketsCount * daysCount;
    const sumForCinema = sumForAllDays * percentForCinema / 100;
    const profit = sumForAllDays - sumForCinema;

    console.log(`The profit from the movie ${movieName} is ${profit.toFixed(2)} lv.`);
}
movieProfit(["The Programmer",
"20",
"500",
"7.50",
"7"])