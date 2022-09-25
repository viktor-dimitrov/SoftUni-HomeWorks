function sortAnArrayBy2Criteria (inputArr) {
    let sorted = inputArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join('\n'));

}
sortAnArrayBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)