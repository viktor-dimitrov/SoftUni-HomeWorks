function editElement(input, pattern, newText ) {
    let changed = input.innerText
    while(changed.includes(pattern)) {
        changed = changed.replace(pattern,newText)
    }
    input.innerText = changed;
}