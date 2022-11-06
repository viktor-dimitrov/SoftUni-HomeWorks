
const textarea = document.getElementById("messages");

function attachEvents() {
    try {
        const sendBtn = document.getElementById("submit");
        sendBtn.addEventListener('click', sendFunc)
        const refreshBtn = document.getElementById("refresh");
        refreshBtn.addEventListener('click', getReq);
    } catch (error) {
        console.log(error.message)
        return
    }
}

function sendFunc() {

    const nameField = document.querySelector('[name="author"]');
    const contentField = document.querySelector('[name="content"]');
     if (!nameField.value || !contentField.value) {
         return
     }
   
    const body = {
        'author': `${nameField.value}`,
        'content': `${contentField.value}`
    };

    postReq(body);
    
    getReq();

    nameField.value = '';
    contentField.value = '';
  
   
}

async function getReq() {

    try {
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const obj = await response.json();
        const values = Object.values(obj).map(obj => obj = `${obj.author}: ${obj.content}`);
        textarea.textContent = values.join('\n');
     } catch (error) {
         console.log(error.message);
     }
    }


async function postReq(body) {
     try {
        const url = 'http://localhost:3030/jsonstore/messenger';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
     } catch (error) {
         console.log(error.message);
     }
console.log(body)
}

attachEvents();