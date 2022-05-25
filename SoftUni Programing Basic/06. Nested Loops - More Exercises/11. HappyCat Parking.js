function happyCatParking (input) {
    const daysCount = Number(input[0]);
    const hoursCount = Number (input[1]);
    let pricePerDay = 0;
    let totalPrice = 0;

    for (let day = 1; day <= daysCount; day++) {
        for (let hours = 1; hours <= hoursCount; hours++) {
            let pricePerHour = 0;
            
            if (day % 2 == 0 && hours % 2 != 0) {
                pricePerHour = 2.5;
            } else if (day % 2 != 0 && hours % 2 == 0) {
                pricePerHour = 1.25;
            } else {
                pricePerHour = 1;
            }
            pricePerDay += pricePerHour;
        }
        console.log(`Day: ${day} - ${pricePerDay.toFixed(2)} leva`);
        totalPrice += pricePerDay;
        pricePerDay = 0;
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
happyCatParking ([2,5])