function addAndRemove ( input) {
    let outputArr = [];
    let inputL = input.length;
    
    for ( let i = 0; i < inputL ; i++) {

        let command = input[i];
        
        if (command === 'add') {
            outputArr.push(i + 1);
        } else {
            outputArr.pop()
        }
    }
    
    if (outputArr.length > 0) {
        console.log(outputArr.join(' ')) 
        
    } else {
        console.log('Empty')
    }

}
addAndRemove (['remove', 'remove', 'remove'])