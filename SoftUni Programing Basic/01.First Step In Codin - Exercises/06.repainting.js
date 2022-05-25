function repainting(input) {
    const nylonPrice = 1.5;
    const paintPrice = 14.5;
    const thinnerPrice = 5;
    const bagPrice = 0.4;
    const neededNylon = Number(input[0]);
    const neededPaint = Number(input[1]);
    const neededThinner = Number(input[2]);
    const workHours = Number(input[3]);
    const materials = (nylonPrice * (neededNylon + 2)) + (paintPrice * neededPaint) + (thinnerPrice * neededThinner)
     + bagPrice + (paintPrice * (neededPaint * 0.1));
    const workersPrice = (materials * 0.3) * workHours;
    const totalPrice = materials + workersPrice;

    console.log (totalPrice)
    

}

repainting(["5", "10", "10", "1"])