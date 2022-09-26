function toggle() {
    let displayStyle = document.getElementById("extra").style.display;
    
    if (document.getElementsByClassName("button")[0].textContent === "More") {
        document.getElementsByClassName("button")[0].textContent = "Less";
        displayStyle = "block"
    } else {
        document.getElementsByClassName("button")[0].textContent = "More";
        displayStyle = "none"
    }
    ;

    document.getElementById("extra").style.display = displayStyle
    
}