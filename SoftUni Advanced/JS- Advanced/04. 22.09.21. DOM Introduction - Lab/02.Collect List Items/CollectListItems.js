function extractText() {
    let arr = document.getElementsByTagName("li");
    let strArr = [];

    for(let el of arr) {
        strArr.push(`${el.innerText} `)
    }
    let str = strArr.join("\n");
    document.getElementById("result").innerText = str;

}