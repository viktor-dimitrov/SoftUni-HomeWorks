function foodDelivery(input){
    const chickenMealPrice = 10.35;
    const fishMealPrice = 12.4; 
    const veganMealPrice = 8.15;

    const chickenMealsCount = Number(input[0]);
    const fishMealsCount = Number(input[1]);
    const veganMealsCount = Number(input[2]);

    const priceForMeals = (chickenMealPrice * chickenMealsCount) + (fishMealPrice * fishMealsCount)
     + (veganMealPrice * veganMealsCount);

    const desertPrice = priceForMeals * 0.2
    const deliveryPrice = 2.5;

    const totalPrice = priceForMeals + desertPrice + deliveryPrice;

    console.log (totalPrice);

}


foodDelivery(["9", "2", "6"])