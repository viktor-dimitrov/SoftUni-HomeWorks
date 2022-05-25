function evenPowerOf2 (input){
    let count = Number (input[0])
    for (let i = 0; i <= count; i+=2) {
        console.log (Math.pow(2,i))

    } 
}
evenPowerOf2 (["6"])