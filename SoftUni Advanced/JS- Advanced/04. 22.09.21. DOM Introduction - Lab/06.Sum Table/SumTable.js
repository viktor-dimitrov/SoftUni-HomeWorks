function sumTable() {

    let allTd = document.querySelectorAll('td');
    let sum = 0;
    for (let el of allTd) {
        if (!isNaN(el.textContent)) {
            sum += Number(el.textContent);
        }
    }
    document.getElementById("sum").textContent = sum;
}

