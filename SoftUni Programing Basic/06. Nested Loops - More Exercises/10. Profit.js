function profit (input) {
    const oneLvCount = Number(input[0]);
    const twoLvCount = Number(input[1]);
    const fiveLvCount = Number(input[2]);
    const totalSum = Number(input[3]);

    for (let o = 0; o <= oneLvCount; o++ ) {
        for (let t = 0; t <= twoLvCount; t++) {
            for (let f =0; f <= fiveLvCount; f++){
                let sum = (o * 1) + (t * 2) + (f * 5);
                if (sum == totalSum ) {
                    console.log(`${o} * 1 lv. + ${t} * 2 lv. + ${f} * 5 lv. = ${totalSum} lv.`);
                }
            }
        }
    }
}
profit (["3","2","3","10"])