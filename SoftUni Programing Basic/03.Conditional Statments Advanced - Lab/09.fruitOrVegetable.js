function fruitOrVegetable (input) {
    const stuff = input[0];
    if (stuff === "banana" || stuff === "apple" || stuff === "kiwi" || stuff === "cherry" || stuff === "lemon" || stuff === "grapes") {
        console.log ("fruit");
    } else if (stuff === "tomato" || stuff === "cucumber" || stuff === "pepper" || stuff === "carrot") {
        console.log ("vegetable");
    } else {
        console.log ("unknown")
    }
}