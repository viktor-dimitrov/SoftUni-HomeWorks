function movieRatings (input) {
    const movieCount = Number(input[0]);
    let index = 1;
    let bestMovie = "";
    let bestRate = -10000;
    let worstMovie = "";
    let worstRate = 10000;
    let totalRating = 0;
    
     for(let i = 0; i < movieCount; i++) {
         let movie = input[index];
         index++;
         let rate = Number(input[index]);
         index++;
         totalRating += rate;
         
         if(rate >= bestRate) {
             bestRate = rate;
             bestMovie = movie;
         }
         if(rate <= worstRate) {
             worstRate = rate;
             worstMovie = movie;
         }
     }
console.log(`${bestMovie} is with highest rating: ${bestRate}`);
console.log(`${worstMovie} is with lowest rating: ${worstRate}`);
console.log(`Average rating: ${(totalRating / movieCount).toFixed(1)}`)

}
movieRatings ([5,
    "A Star is Born",
    7.8,
    "Creed 2",
    7.3,
    "Mary Poppins",
    7.2,
    "Vice",
    7.2,
    "Captain Marvel",
    7.1])