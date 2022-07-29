function furniture(inputArray) {
    let inputString = inputArray.join('');
    let pattern = />>(?<item>[A-Z][A-z]+)<<(?<price>\d+\.*\d+)!(?<count>\d+)/g;
    let valid;
    let sum = 0;

    console.log('Bought furniture:');

    while ((valid = pattern.exec(inputString)) !== null) {
        let item = valid.groups['item'];
        let price = Number(valid.groups['price']);
        let count = Number(valid.groups['count']);
        sum += price * count;
        console.log(item);

    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
furniture(['>>Sofa<<312.253!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)