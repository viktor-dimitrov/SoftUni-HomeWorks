function basketballEquipment (input) {
    const tax = Number(input[0]);
    const shoesPrice = tax - tax * 0.4;
    const equipPrice = shoesPrice - shoesPrice * 0.2;
    const ballPrice = equipPrice / 4;
    const accPrice = ballPrice / 5;
    const totalSum = tax + shoesPrice + equipPrice + ballPrice + accPrice;
    console.log(totalSum.toFixed(2));
}
basketballEquipment (["320"])