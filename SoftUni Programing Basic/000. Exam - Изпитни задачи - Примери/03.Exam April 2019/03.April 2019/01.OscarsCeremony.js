function oscarsCeremony (input) {
const rent = Number (input);
const figuresPrice = rent * 0.7;
const cateringPrice = figuresPrice * 0.85;
const musicPrice = cateringPrice / 2;
const price = rent + figuresPrice + cateringPrice + musicPrice;
console.log (price.toFixed(2));
} 
oscarsCeremony (3500)