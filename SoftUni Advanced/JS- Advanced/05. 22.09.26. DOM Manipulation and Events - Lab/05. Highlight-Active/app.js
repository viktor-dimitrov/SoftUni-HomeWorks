function focused() {
    
    let boxesList = document.querySelectorAll('input');

    for (let box of boxesList) {

        box.addEventListener('focus', focusFunc);

        function focusFunc(){
            
            box.parentElement.setAttribute("class", "focused");
        }

        box.addEventListener('blur', unfocusFunc);
        
        function unfocusFunc(){
            box.parentElement.removeAttribute("class", "focused");
        }
       
    }
}