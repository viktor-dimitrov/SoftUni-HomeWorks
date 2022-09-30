function validate() {
    let pattern = /[a-z]+\@[a-z]+\.[a-z]+/gm
    let inputBox = document.getElementById("email");
   
    inputBox.addEventListener('change', noMatches);
   
    function noMatches() {
      
        
        if(!pattern.test(inputBox.value)) {
            inputBox.classList.add('error')
        } else {
            inputBox.classList.remove('error')
        }
    }
    
}
