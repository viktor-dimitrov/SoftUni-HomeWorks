function login (input) {
    let user = input[0];
    let correctPass = '';
    let chars = user.length - 1;
    

    for (let i = chars; i >= 0; i-- ) {
        
        let passChar = user.charAt(i);
        correctPass += passChar;
    }

    let index = 1;
    let command = input[index];

    while (command != correctPass) {

        if (index == input.length - 1) {
            break;
        }

        if (command != correctPass) {
            console.log (`Incorrect password. Try again.`);
            index++;
            command = input[index];
    }
}

    if (command == correctPass) {
        console.log (`User ${user} logged in.`);
    }  else {
        console.log (`User ${user} blocked!`);
    }

}
login (['sunny','rainy','cloudy','sunny','not sunny'])