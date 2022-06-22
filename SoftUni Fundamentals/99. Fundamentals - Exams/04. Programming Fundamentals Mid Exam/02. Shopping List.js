function shopingList (input) {
    let productList = input.shift().split('!');

    let index = 0;
    let command = input[index];
    
    while (command) {

        if (command  == "Go Shopping!") {
            break;
        }

        let commandArray = command.split(" ");
        let whatToDo = commandArray[0];
        let item = commandArray[1];

        switch(whatToDo) {
            case'Urgent':
            if (!productList.includes(item)) {
                productList.unshift(item);
            }
            break;

            case'Unnecessary':
            if (productList.includes(item)) {
                productList.splice(productList.indexOf(item), 1);
            }
            break;

            case'Correct':
            if (productList.includes(item)) {
                productList.splice(productList.indexOf(item), 1, commandArray[2]);
            }
            break;

            case'Rearrange':
            if (productList.includes(item)) {
                productList.splice(productList.indexOf(item), 1);
                productList.push(item);
            }
            break;
        }
        command = input[index];
        index++;
        
    }

console.log(productList.join(', '))
}

shopingList ((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shoppinggd!,",
"Urgent uhu"]))