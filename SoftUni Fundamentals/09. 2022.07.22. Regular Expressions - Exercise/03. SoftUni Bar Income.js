function softUniBarIncome(inputArray) {
    let stringInput = inputArray.join(', ');
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.0-9]*<(?<product>[A-Z]+[a-z]+)>[^|$%.0-9]*\|[^|$%.0-9]*(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+[.\d+]*)\$/g;
    let valid;
    let totalSum = 0;

    while ((valid = pattern.exec(stringInput)) !== null) {
        
        let name = valid.groups.name;
        let product = valid.groups.product;
        let count = Number(valid.groups.count);
        let price = Number(valid.groups.price);
        let sum = count * price;
        totalSum += sum;
        console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome([['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']])