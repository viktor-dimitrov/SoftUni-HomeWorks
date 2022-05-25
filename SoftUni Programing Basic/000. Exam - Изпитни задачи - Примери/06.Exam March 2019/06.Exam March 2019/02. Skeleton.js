function skeleton(input) {
    const minutes = Number(input[0]);
    const seconds = Number(input[1]);
    const length = Number(input[2]);
    const secondFor100m = Number(input[3]);
    const discount = (length / 120) * 2.5;
    const marinTime = (length / 100) * secondFor100m - discount;
    const recordTime = (minutes * 60) + seconds;
    const difference = Math.abs(recordTime - marinTime);

    if (marinTime <= recordTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${difference.toFixed(3)} second slower.`)
    }
}
skeleton (["2",
"12",
"1200",
"10"])