function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', show);
    }

    function show (event) {
        let parent = event.target.parentElement;
        let radio = parent.querySelectorAll('input')[1];
        let unlocked = radio.checked;
        let info = parent.querySelector('div');
        
        if (unlocked) {
            switch (event.target.textContent) {
                case 'Show more':
                    info.style.display = 'block';
                    event.target.textContent = 'Hide it';
                    break;
                case 'Hide it':
                    info.style.display = 'none';
                    event.target.textContent = 'Show more';
                    break;
            }
            ;
        }
    }

}