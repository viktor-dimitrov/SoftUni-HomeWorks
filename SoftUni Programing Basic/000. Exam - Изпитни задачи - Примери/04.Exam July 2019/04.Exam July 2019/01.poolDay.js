function poolDay (input) {
    const peopleCount = Number (input[0]);
    const entryTax = Number (input[1]);
    const taxPerChair = Number (input[2]);
    const taxPerUmbrela = Number (input[3]);
    const allTaxes = peopleCount * entryTax;
    const umbrelaCount = Math.ceil(peopleCount / 2);
    const chairsCount = Math.ceil(peopleCount * 0.75);
    const chairsPrice = chairsCount * taxPerChair;
    const umbrelaPirce = umbrelaCount * taxPerUmbrela;
    const totalPrice = allTaxes + umbrelaPirce + chairsPrice
    console.log (`${totalPrice.toFixed(2)} lv. `);
}
poolDay ([21 , 5.50, 4.40, 6.20])
 