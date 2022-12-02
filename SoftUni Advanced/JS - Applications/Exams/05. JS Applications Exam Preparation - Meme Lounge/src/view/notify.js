
const errorBox = document.querySelector("#errorBox span");
const notifyDiv = document.querySelector(".notification");

export function showError(msg){

    console.log(notifyDiv)
    errorBox.textContent = msg;
    notifyDiv.style.display = "block";

    setTimeout(()=>notifyDiv.style.display = "none", 3000);
}