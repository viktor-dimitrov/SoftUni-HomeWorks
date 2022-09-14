function squareOfStars(input) {

    let num = input || 5;

    for (let i = 0; i < num; i++) {
        let line = "";
        for (let j = 0; j < num;j++) {
            line += "* ";
        }
        console.log(line);
    }
}
squareOfStars()