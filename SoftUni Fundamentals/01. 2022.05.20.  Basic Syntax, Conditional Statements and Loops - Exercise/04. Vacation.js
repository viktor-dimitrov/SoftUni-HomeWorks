function vacation (count, type, day){

let price = 0;

if (day === 'Friday') {
    switch(type) {
        case 'Students': price = 8.45; break;
        case 'Business': price = 10.90; break;
        case 'Regular' : price = 15; break;
    }
} else if (day === 'Saturday') {
    switch(type) {
        case 'Students': price = 9.80; break;
        case 'Business': price = 15.60; break;
        case 'Regular' : price = 20; break;
    }
} else if (day === 'Sunday') {
    switch(type) {
        case 'Students': price = 10.46; break;
        case 'Business': price = 16; break;
        case 'Regular' : price = 22.50; break;
    }
}

let totalPrice = count * price;

if (type === 'Students' && count >= 30) {
    totalPrice *= 0.85;
} else if (type === 'Business' && count >= 100) {
    totalPrice -= price * 10;
} else if (type === 'Regular' && count >= 10 && count <=20) {
    totalPrice *= 0.95;
}

console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation (40,
    "Regular",
    "Saturday")