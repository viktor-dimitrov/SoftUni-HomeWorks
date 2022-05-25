function godzillaVsKong (input) {
    const budget = Number (input[0]) * 0.9;
    const peoplesCount = Number (input[1]);
    const wearPrice = Number (input[2])

    let outlay = peoplesCount * wearPrice;
    
    if (peoplesCount > 150) {
        outlay *= 0.9;
    }

    const differnece = Math.abs(budget - outlay);

    if (outlay > budget) {
        console.log ("Not enough money!")
        console.log (`Wingard needs ${differnece.toFixed(2)} leva more.`)
    } else {
        console.log (`Action!`)
        console.log (`Wingard starts filming with ${differnece.toFixed(2)} leva left.`)
    }

    
}
godzillaVsKong ([20000, 120, 55.5])