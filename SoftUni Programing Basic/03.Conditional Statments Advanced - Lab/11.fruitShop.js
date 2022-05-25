function fruitShop (input) {
    const fruit = input[0];
    const day = input[1]
    const count = Number (input[2]);
    let bananaPrice = 0;
    let applePrice = 0;
    let orangePrice = 0;
    let grapefruitPrice = 0;
    let kiwiPrice = 0;
    let pineapplePrice = 0;
    let grapesPrice = 0;
 
    
    if (day === "Saturday" || day === "Sunday") { 
     bananaPrice = 2.7;
     applePrice = 1.25;
     orangePrice = 0.9;
     grapefruitPrice = 1.6;
     kiwiPrice = 3;
     pineapplePrice = 5.60;
     grapesPrice = 4.20;

     switch (fruit) {
        case "banana": console.log ((bananaPrice * count).toFixed(2)); break;
        case "apple": console.log ((applePrice * count).toFixed(2)); break;
        case "orange": console.log ((orangePrice * count).toFixed(2)); break;
        case "grapefruit": console.log ((grapefruitPrice * count).toFixed(2)); break;
        case "kiwi": console.log ((kiwiPrice * count).toFixed(2)); break;
        case "pineapple": console.log ((pineapplePrice * count).toFixed(2)); break;
        case "grapes": console.log ((grapesPrice * count).toFixed(2)); break;
        default: console.log ("error");
    }
 } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
     bananaPrice = 2.5;
     applePrice = 1.2;
     orangePrice = 0.85;
     grapefruitPrice = 1.45;
     kiwiPrice = 2.7;
     pineapplePrice = 5.50;
     grapesPrice = 3.85; 
     switch (fruit) {
        case "banana": console.log ((bananaPrice * count).toFixed(2)); break;
        case "apple": console.log ((applePrice * count).toFixed(2)); break;
        case "orange": console.log ((orangePrice * count).toFixed(2)); break;
        case "grapefruit": console.log ((grapefruitPrice * count).toFixed(2)); break;
        case "kiwi": console.log ((kiwiPrice * count).toFixed(2)); break;
        case "pineapple": console.log ((pineapplePrice * count).toFixed(2)); break;
        case "grapes": console.log ((grapesPrice * count).toFixed(2)); break;
        default: console.log ("error");
    }
} else {
    console.log ("error")
}
}

fruitShop (["banana", "funday", 1])
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
