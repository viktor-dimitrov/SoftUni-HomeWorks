function pcGameShop (input) {
    const sales = Number(input[0]);
    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;
    let allGamesCounter = 0;

    for (let i = 1; i <= sales; i++) {
        let gameName = input[i];
        
        if (gameName == "Hearthstone") {
            hearthstoneCounter++;
        } else if (gameName == "Fornite") {
            forniteCounter++;
        } else if (gameName == "Overwatch") {
            overwatchCounter++;
        } else {
            othersCounter++;
        }
        allGamesCounter++;
    }
    console.log(`Hearthstone - ${(hearthstoneCounter / allGamesCounter * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCounter / allGamesCounter * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCounter / allGamesCounter * 100).toFixed(2)}%`);
    console.log(`Others - ${(othersCounter / allGamesCounter * 100).toFixed(2)}%`);
}
pcGameShop ([4,
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"])