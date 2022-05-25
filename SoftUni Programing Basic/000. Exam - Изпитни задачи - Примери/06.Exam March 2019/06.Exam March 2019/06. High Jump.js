function highJump (input) {
    let target = Number(input[0]);
    let index = 1;
    let start = target - 30;
    let jump = 0;
    let jumpsCounter = 0;
    let unsuccJumps = 0;
    let lastSuccJump = 0;

    while (jump <= target) {

        if (index >= input.length) {
            break;
        }
        let j = Number(input[index]);
        index++;
        if (j > start) {
            
            start += 5;
            unsuccJumps = 0;
            lastSuccJump = j;
        } else {
            unsuccJumps ++;
        }
        jumpsCounter++;
        if (unsuccJumps >= 3) {
            break;
        }


        jump = j;

       

    }
    
    if (jump > target) {
        console.log(`Tihomir succeeded, he jumped over ${target}cm after ${jumpsCounter} jumps.`);
    } else {
        console.log(`Tihomir failed at ${start}cm after ${jumpsCounter} jumps.`);
    }
}
highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])