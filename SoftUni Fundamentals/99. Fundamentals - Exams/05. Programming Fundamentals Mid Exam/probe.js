function movingTarget(arr) {
 
    let targets = arr.shift().split(' ').map(Number);
    for (let el of arr) {
        if (el === 'End') {
            console.log(`${targets.join('|')}`);
            break;
        }
        el = el.split(' ');
        let comand = el[0]
        let indexOfTarget = Number(el[1]);
        let value = Number(el[2]);
        if (comand === 'Shoot') {
            if (indexOfTarget <= targets.length - 1 && indexOfTarget >= 0) {
                let targetShoot = Number(targets.splice(indexOfTarget, 1));
                targetShoot -= value;
                if (targetShoot > 0) {
                    targets.splice(indexOfTarget, 0, targetShoot);
                }
            }
        } else if (comand === 'Add') {
            if (indexOfTarget <= targets.length - 1 && indexOfTarget >= 0) {
                let targetValueIncrease = Number(targets.splice(indexOfTarget, 1));
                targetValueIncrease += value;
                targets.splice(indexOfTarget, 0, targetValueIncrease);
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (comand === 'Strike') {
            if ((indexOfTarget + value) <= targets.length - 1 && (indexOfTarget - value) >= 0) {
                let rangeStart = indexOfTarget - value;
                let rangeEnd = (value * 2) + 1 ;
                targets.splice(rangeStart, rangeEnd); 
            } else {
                console.log(`Strike missed!`);
            }
        }
    }
}
movingTarget((["1",
"Strike 1 6",
"Shoot 1 2",
"Add 3 5",
"End"]))