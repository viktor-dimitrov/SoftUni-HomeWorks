function encodeAndDecodeMessages() {
    let sendBtn = document.querySelectorAll('button')[0];
    let readBtn = document.querySelectorAll('button')[1];
    let sendBox = document.querySelectorAll('textarea')[0];
    let readBox = document.querySelectorAll('textarea')[1];

    sendBtn.addEventListener('click', encode);
    readBtn.addEventListener('click', decode);

    function encode(){
        let input = sendBox.value.split('');
        let code = input.map(a => {
            let num = a.charCodeAt() + 1;
            let char = String.fromCharCode(num);
            return char;
        } ).join('');

        readBox.value = code;
        sendBox.value = '';
       
    }

    function decode () {
        let recMess = readBox.value.split('');
        let decode = recMess.map(a => {
            let num = a.charCodeAt() - 1;
            let char = String.fromCharCode(num);
            return char;
        } ).join('');
        
        readBox.value = decode;
    }
}