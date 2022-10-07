function solution() {

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function (param) {
        let output = '';

        if (param === "report") {
            for (let key in stock) {
                output += `${key}=${stock[key]} `
            }
        } else {

            let [command, product, quantity] = param.split(' ');

            if (command === 'restock') {
                stock[product] += Number(quantity);
                output = "Success"
            } else {
                let controlStock = JSON.parse(JSON.stringify(stock));
                let needed = Object.entries(recipes[product]);
                let flag = true;


                for (let [k, v] of needed) {

                    if (controlStock[k] < (v * quantity)) {
                        flag = false;
                        output = "Error: not enough carbohydrate in stock";
                        break;
                        
                    } else {
                        controlStock[k] -= (v * quantity);
                    }

                }

                if (flag) {
                    stock = controlStock;
                    output = "Success";
                }

            }

        }
        return output.trim();
    }
}

let manager = solution (); 
 
console.log (manager ("restock carbohydrate 10"))
console.log (manager ("restock flavour 10"))
console.log (manager ("prepare apple 1"))
console.log (manager ("prepare lemonade 4"))
console.log (manager ("prepare burger 1"))
console.log (manager ("report"))

