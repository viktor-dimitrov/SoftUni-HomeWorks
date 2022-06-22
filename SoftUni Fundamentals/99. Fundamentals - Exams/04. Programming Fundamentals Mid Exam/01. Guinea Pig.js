function guineaPig(input) {
    let param = input.map(Number);
    let food = input[0] * 1000;
    let hay = input[1] * 1000;
    let cover = input[2] * 1000;
    let puppy = input[3] * 1000;
    let isFine = true;

    for (let day = 1; day < 31; day++) {
        food -= 300;
        if (day % 2 == 0) {
            hay -= (food * (5 / 100)); 
        }
        if (day % 3 == 0) {
            cover -= (puppy / 3);
        }

        if (food < 1 || hay < 1 || cover < 1) {
            isFine = false;
            break;
        }
    }

    if (isFine) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2) }, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}

guineaPig((["10", 
"5", 
"5.2", 
"1"]))