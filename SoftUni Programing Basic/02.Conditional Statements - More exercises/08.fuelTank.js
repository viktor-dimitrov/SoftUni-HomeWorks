function fuelTank (input){
    const fuel = String (input[0]);
    const liters = Number (input[1]);
    if (fuel !== "Diesel" && fuel !== "Gas" && fuel !== "Gasoline") {
        console.log (`Invalid fuel!`)
    } else if (liters >= 25) {
        console.log (`You have enough ${fuel.toLowerCase()}.`)
    } else if (liters < 25) {
        console.log (`Fill your tank with ${fuel.toLowerCase()}!`)
    }
}
fuelTank(["gas", 26])