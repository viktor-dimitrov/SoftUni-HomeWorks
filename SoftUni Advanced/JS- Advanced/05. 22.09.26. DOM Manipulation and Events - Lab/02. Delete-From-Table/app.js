function deleteByEmail() {
    let input = document.querySelector("label").children[0].value;
    let tableRow = document.getElementsByTagName("tr");
    let result = document.getElementById("result");
   
    for (let mail of tableRow) {
       let currMail = mail.children[1].textContent;
       if (input === currMail) {
       mail.remove();
       result.textContent = "Deleted";
       } else {
        result.textContent = "Not found.";
       }
    }
}