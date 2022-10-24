class Restaurant {
    constructor(budget) {

        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }


    loadProducts(arr) {

       

        for (let line of arr) {
            let [name, quant, price] = line.split(' ');

            if (!Object.keys(this.stockProducts).includes(name)) {
                if (this.budgetMoney >= Number(price)) {
                    this.stockProducts[name] = Number(quant);
                    this.budgetMoney -= Number(price);
                
                    this.history.push(`Successfully loaded ${quant} ${name}`)
                } else {
                   
                    this.history.push(`There was not enough money to load ${quant} ${name}`)
                }
            } else {
                if (this.budgetMoney >= Number(price)) {
                    this.stockProducts[name] += Number(quant);
                     this.budgetMoney -= Number(price);
              
                    this.history.push(`Successfully loaded ${quant} ${name}`)
                } else {
            
                    this.history.push(`There was not enough money to load ${quant} ${name}`)
                }
              
            }
            
        }

        return this.history.join('\n')
    }

    addToMenu(meal, needed, price) {

        if (!Object.keys(this.menu).includes(meal)) {
            this.menu[meal] = { neededProducts: needed, price: price };
            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

    }

    showTheMenu() {
        let output = [];

        if (Object.keys(this.menu).length < 1) {
            output.push("Our menu is not ready yet, please come later...");
        } else {
            Object.keys(this.menu).forEach(key => {
                output.push(`${key} - $ ${this.menu[key].price}`)
                
            });
        }

        return output.join('\n')
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let haveAll = true;

        this.menu[meal].neededProducts.forEach((el) => {
            let product = el.split(' ')[0];
            if (!this.stockProducts[product]) {
                haveAll = false;
            }
        })

       if (haveAll) {
        this.menu[meal].neededProducts.forEach((el)=>{
          let product = el.split(' ')[0];
          let quant = Number(el.split(' ')[1])
         
              this.stockProducts[product] -= quant;
            
           })

          
           this.budgetMoney += this.menu[meal].price;
          
           return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

       } else {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
       }




    }



}

let kitchen = new Restaurant(10000);
console.log(kitchen.loadProducts(['Banana 10 5','Banana 20 10', 'Banana 20 1', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.stockProducts)

kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder(''));

