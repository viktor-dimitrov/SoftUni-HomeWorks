function mathPower (num, pow) {
    let res = 1;

    for (let i = 0; i < pow; i++) {
        res *= num;
    }
    console.log(res)
}
mathPower (2,8)