function orders (product, count) {
   
    let price
    switch(product) {
        case'coffee': price = 1.5; break;
        case'water': price = 1; break;
        case'coke': price = 1.4; break;
        case'snacks': price = 2; break; 
    }
    return (price * count).toFixed(2)
}
console.log(orders ('water', 5))