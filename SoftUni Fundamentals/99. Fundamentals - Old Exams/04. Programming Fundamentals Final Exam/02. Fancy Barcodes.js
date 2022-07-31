function fancyBarcodes(inputArr) {

    let count = Number(inputArr.shift());
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;

    for (let i = 0; i < count; i++) {
        let line = inputArr[i];
        let group = '';

        if (line.match(pattern)) {
            for (let l of line) {
                if (!isNaN(l)) {
                    group += l
                }
            }
            if (group.length === 0) {
                console.log(`Product group: 00`)
            } else {
                console.log(`Product group: ${group}`)
            }
        } else {
            console.log('Invalid barcode')
        }
    }
}
fancyBarcodes((["6",
"@###VAAAA2A@####",
"@#Vali0dIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]))