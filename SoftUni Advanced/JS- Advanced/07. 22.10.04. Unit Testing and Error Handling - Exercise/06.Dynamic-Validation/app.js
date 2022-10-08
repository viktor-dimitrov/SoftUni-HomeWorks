function validate() {
    
    let textBox = document.getElementsByTagName('input')[0];
    let pattern = /[a-z]+\@[a-z]+\.[a-z]+/gm;

    textBox.addEventListener("change", red);

    function red (e) {

        if (!pattern.test(textBox.value)){
            textBox.classList.add('error')
        } else {
            textBox.classList.remove('error')
        }


    }
}