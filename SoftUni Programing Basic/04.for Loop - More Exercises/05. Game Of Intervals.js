function gameOfIntervals(input) {
    index = 0;
    const stepsCount = Number (input[index]);
    index++;
    let points = 0;
    let num0To9 = 0;
    let num10To19 = 0;
    let num20To29 = 0;
    let num30To39 = 0;
    let num40To50 = 0;
    let invalidNum = 0;

    for (let i = 0; i < stepsCount; i++) {
        let num = Number(input[index++]);
        if (num >= 0 && num <= 9) {
            points += num * 0.2;
            num0To9++;
        } else if (num >= 10 && num <= 19) {
            points += num * 0.3;
            num10To19++;
        } else if (num >= 20 && num <=29) {
            points += num * 0.4;
            num20To29++;
        } else if (num >= 30 && num <= 39) {
            points += 50;
            num30To39++;
        } else if (num >= 40 && num <= 50) {
            points += 100
            num40To50++;
        } else {
            points *= 0.5;
            invalidNum++;
        }
    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${(num0To9 / stepsCount * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(num10To19 / stepsCount * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(num20To29 / stepsCount * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(num30To39 / stepsCount * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(num40To50 / stepsCount * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNum / stepsCount * 100).toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
