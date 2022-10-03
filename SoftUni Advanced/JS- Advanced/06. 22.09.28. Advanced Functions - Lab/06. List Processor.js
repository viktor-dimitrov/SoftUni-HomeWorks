function listProcesor(inputArr) {
    let output = [];

    let executor = {
        add: (input) => {output.push(input)},
        remove: (input) => {output = output.filter((el) => el !== input)},
        print: () => {console.log(output.join(','))}
    }

    inputArr.forEach(element => {
        let [command, str] = element.split(' ');
        return executor[command](str)
        
    });

}

listProcesor(['add hello', 'add again', 'remove hello', 'add again', 'print'])