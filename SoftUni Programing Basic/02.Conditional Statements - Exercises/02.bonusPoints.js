function bonusPoints(input){
    const Num = Number(input[0]);
    let bonus = Number (0);
    let extraBonus = Number (0);
    if  (Num <= 100) {
        bonus = 5;
    } else if (100 < Num && Num < 1000){
        bonus = (Num * 0.2);
    } else if (Num > 1000){
        bonus = (Num * 0.1);
    } 
    if (Num % 2 === 0) {
        extraBonus = 1
    } else if (Num % 5 === 0 ){
        extraBonus = 2
    }
    console.log(bonus + extraBonus)
    console.log (Num + (extraBonus + bonus))
}
bonusPoints(["17"])



