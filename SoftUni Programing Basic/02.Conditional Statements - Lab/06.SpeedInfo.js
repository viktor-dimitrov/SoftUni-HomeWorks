function speedInfo(input){
    const speed = (input[0]);
    let result = ""
    if (speed <= 10) {
        result = "slow";
    }
    else if (speed > 10 && speed <=50) {
        result = "average"
    }
    else if (speed > 50 && speed <=150) {
        result = "fast"
    }
    else if (speed > 150 && speed <= 1000){
        result = "ultra fast"
    }
    else if (speed > 1000){
        result = "extremely fast"
    }
    console.log(result)
}
speedInfo(["25"])

// •	При скорост до 10 (включително) отпечатайте "slow"
// •	При скорост над 10 и до 50 (включително) отпечатайте "average" 
// •	При скорост над 50 и до 150 (включително) отпечатайте "fast"
// •	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
// •	При по-висока скорост отпечатайте "extremely fast"
