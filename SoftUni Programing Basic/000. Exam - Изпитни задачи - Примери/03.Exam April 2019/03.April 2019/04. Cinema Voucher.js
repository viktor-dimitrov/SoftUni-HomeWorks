function cinemaVoucher (input) {
    let voucher = Number(input[0]);
    let sum = voucher;
    let ticketsCount = 0;
    let otherCount = 0;
    let index = 1;
    let command = input[index];
    while (sum >= 0) {
        if (command == "End") {
            break;
        }
        let purchase = String(command);
        index++;
        command = input[index];
        let price = 0;
        
        if (purchase.length > 8) {
            price = purchase.charCodeAt(0) + purchase.charCodeAt(1);
            if (price > sum) {
                break;
            }
            ticketsCount++;
        } else {
            price = purchase.charCodeAt(0);
            if (price > sum) {
                break;
            }
            otherCount++;
        }
        sum -= price;
    }
    console.log(ticketsCount)
    console.log(otherCount)
}
cinemaVoucher([300,
    "Captain Marvel",
    "popcorn",
    "Pepsi"])