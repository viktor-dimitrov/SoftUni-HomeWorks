function catDiet (input) {
    const percentFats = Number(input[0]);
    const percentProteins = Number(input[1]);
    const percentCarbonhydrates = Number(input[2]);
    const totalCalories = Number(input[3]);
    const PercentWater = Number(input[4]);
    const totalFats = ( totalCalories * percentFats / 100) / 9;
    const totalProteins = (totalCalories * percentProteins / 100) / 4;
    const totalCarbonhydrates = (totalCalories * percentCarbonhydrates / 100) / 4;
    const foodWeight = totalFats + totalProteins + totalCarbonhydrates;
    const caloriesForGram = totalCalories / foodWeight;
    const calories = caloriesForGram  - (caloriesForGram * PercentWater / 100)
    console.log (calories.toFixed(4))  
}
catDiet(["40",
"40",
"20",
"3000",
"40"])