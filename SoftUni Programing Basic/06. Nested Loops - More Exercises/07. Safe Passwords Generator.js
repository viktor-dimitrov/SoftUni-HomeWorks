function safePasswordsGenerator(input) {
    let endX = Number(input[0]);
    let endY = Number(input[1]);
    let maxCount = Number(input[2]);
    let passwords = ""
    let passCounter = 0;
    let finish = false;
    for (let A = 35; A <= 55; A++) {
        if(finish) {
            break;
        }
        for (let B = 64; B <= 96; B++) {
            if(finish) {
                break;
            }
            for (let x = 1; x <= endX; x++){
                if (finish) {
                    break;
                }
                for (let y = 1; y <= endY; y++){
                    passwords += (`${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`);
                    passCounter++;
                    A++;
                    if (A > 55) {
                        A =35
                    }
                    B++;
                    if (B > 96) {
                        B = 64
                    }
                    if(x >= endX && y >= endY){
                        finish = true;
                        break;
                    } else if (passCounter >= maxCount) {
                        finish = true;
                        break;
                    }
                    
                }
            }
            
        }
        
    } 

console.log(passwords)

}
safePasswordsGenerator(['20','50','10'])