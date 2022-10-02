function addItem() {
    let inputText = document.querySelectorAll('input')[0];
    let inputValue = document.querySelectorAll('input')[1];
    let menu = document.getElementById('menu');

    let opt = document.createElement('option');
    opt.textContent = inputText.value;;
    opt.value = inputValue.value;;

    menu.appendChild(opt);

    inputText.value = '';
    inputValue.value = '';

}