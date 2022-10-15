function solve() {

    let recipient = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");


    let buttonAdd = document.getElementById("add");
    buttonAdd.addEventListener('click', addFunc);

    let buttonReset = document.getElementById("reset")
    buttonReset.addEventListener('click', resetFunc);

    let listMails = document.getElementsByClassName("list-mails")[0];
    let listUl = listMails.querySelector('ul');
    let sendMails = document.getElementsByClassName("sent-list")[0];
    let delList = document.getElementsByClassName("delete-list")[0]

 

    function addFunc (e) {
        e.preventDefault();
        
        if (!recipient.value || !title.value || !message.value) {
            return;
        }

        let li = document.createElement('li');

        let h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${title.value}`;
        li.appendChild(h4Title);
        let h4Recepient = document.createElement('h4');
        h4Recepient.textContent = `Recipient Name: ${recipient.value}`;
        li.appendChild(h4Recepient);
        let span = document.createElement('span');
        span.textContent = message.value;
        li.appendChild(span);
        let div = document.createElement('div');
        div.setAttribute('id', 'list-action');


        let buttonSend = document.createElement('button');
        buttonSend.addEventListener('click', sendFunc);
        buttonSend.setAttribute('type', 'submit');
        buttonSend.setAttribute('id', 'send');
        buttonSend.textContent = 'Send';
        div.appendChild(buttonSend);

        let buttonDel = document.createElement('button');
        buttonDel.addEventListener('click', delFunc)
        buttonDel.setAttribute('type', 'submit');
        buttonDel.setAttribute('id', 'delete');
        buttonDel.textContent = 'Delete';
        div.appendChild(buttonDel);
        li.appendChild(div);

        let p = document.createElement('p');
        p.appendChild(li)

        let data = Array.from(p.children)
        data.forEach(element => {
            listUl.appendChild(element)
            
        });


        recipient.value = '';
        title.value = '';
        message.value = '';
    }


    function resetFunc (e) {
        e.preventDefault()
        recipient.value = '';
        title.value = '';
        message.value = '';

    }

    function sendFunc (e) {

        e.preventDefault();
        let liTag = e.target.parentElement.parentElement;
        let elements = liTag.children;
        
        let li = document.createElement('li');
        let span1 = document.createElement('span')
        span1.textContent = `To: ${elements[1].textContent.split(': ')[1]}`;
        li.appendChild(span1);
        let span2 = document.createElement('span');
        span2.textContent = `Title: ${elements[0].textContent.split(': ')[1]}`;
        li.appendChild(span2);

        let div = document.createElement('div');
        div.setAttribute('class', 'btn');
        let button = document.createElement('button');
        button.addEventListener('click', delfromSendList)
        button.setAttribute('type', 'submit');
        button.setAttribute('class', 'delete');
        button.textContent = "Delete";
        div.appendChild(button);
        li.appendChild(div);
        sendMails.appendChild(li);
        liTag.remove();
    }

    function delFunc(e) {

        e.preventDefault();
        let liTag = e.target.parentElement.parentElement;
        let elements = liTag.children;
       
        let li = document.createElement('li');
        let span1 = document.createElement('span')
        span1.textContent = `To: ${elements[1].textContent.split(': ')[1]}`;
        li.appendChild(span1);
        let span2 = document.createElement('span');
        span2.textContent = `Title: ${elements[0].textContent.split(': ')[1]}`;
        li.appendChild(span2);

        delList.appendChild(li);
        liTag.remove();
    }

    function delfromSendList (e) {
        e.preventDefault();
        let data = e.target.parentElement.parentElement;

        let li = document.createElement('li');
        li.appendChild(data.children[0])
    
        delList.appendChild(li);
        data.remove()
        

        
    }

}
solve()