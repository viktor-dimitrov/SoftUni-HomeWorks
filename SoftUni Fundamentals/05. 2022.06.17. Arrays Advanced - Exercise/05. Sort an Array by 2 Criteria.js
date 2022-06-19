function sortAnArrayBy2Criteria (input) {

    input.sort(((a,b) => a.length - b.length) || ((a,b) => a.localeCompare(b)));
    console.log(input.join('\n'));

}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])