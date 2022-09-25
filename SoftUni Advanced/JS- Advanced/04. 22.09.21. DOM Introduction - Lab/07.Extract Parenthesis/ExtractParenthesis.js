function extract(content) {
    let text = document.getElementById('content').textContent;
    let arr = text.split('(');
    let outputArr = [];
    for (let line of arr) {
        if (line.includes(')')) {
            let i = Number(line.indexOf(')'));
            outputArr.push(line.substring(0, i));
        }
    }
    
    return outputArr.join('; '); 
}