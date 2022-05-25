function godzillaVsKong(input){
    const budget = Number (input[0]) * 0.9;
    const stuntmanCount = Number(input[1]);
    const clothesPricePerStuntman = Number (input[2]);
    let allClothesPrice = stuntmanCount * clothesPricePerStuntman;
    if (stuntmanCount > 150){
        allClothesPrice *= 0.9;
    }
const difference = Math.abs(budget - allClothesPrice).toFixed(2);
if (allClothesPrice > budget) {
    console.log (`Not enough money!`);
    console.log (`Wingard needs ${difference} leva more.`);
} else {
    console.log (`Action!`);
    console.log (`Wingard starts filming with ${difference} leva left.`)
}
}
godzillaVsKong(["20000", "120", "55.5"])