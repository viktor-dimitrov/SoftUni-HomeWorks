window.addEventListener('load', solution);

function solution() {
  let fname = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let code = document.getElementById("code");

  let submit = document.getElementById("submitBTN");
  submit.addEventListener('click', submitFunc);

  let info = document.getElementById("infoPreview");

  let editButton = document.getElementById("editBTN");
  editButton.addEventListener('click', editFunc);
  let continueButton = document.getElementById("continueBTN");
  continueButton.addEventListener('click', continueFunc);

  let block = document.getElementById('block')

  let inputs = [fname, email, phone, address, code]


  function submitFunc (e) {
    e.preventDefault();
   
    let contents = [["Full Name: ",fname.value], ["Email: ", email.value], ["Phone Number: ",phone.value], ["Address: ",address.value], ["Postal Code: ",code.value]]

    if (!fname.value || !email.value) {
      return 
    }

    contents.forEach(el => {
    let li = document.createElement('li');
    li.textContent = `${el[0]}${el[1]}`;
    info.appendChild(li);
    });

    inputs.forEach(element => {
      element.value = ""
    });

    submit.disabled = true;
    editButton.disabled = '';
    continueButton.disabled = ''

  }

function editFunc(e) {
  e.preventDefault();
  let data = Array.from(info.children);
  phone.type = 'text';
  code.type = 'text'

  for (let i = 0; i < inputs.length; i ++) {
    
      inputs[i].value = data[i].textContent.split(': ')[1];
    
   
    data[i].remove();
  }
  phone.type = 'number';
  code.type = 'number'

  submit.disabled = '';
  editButton.disabled = true;
  continueButton.disabled = true;

}


function continueFunc(e) {
  e.preventDefault();

  let data = Array.from(block.children);
  data.forEach(element => {
    element.remove()
  });
  let h3 = document.createElement('h3');
  h3.textContent = "Thank you for your reservation!" ;
  block.appendChild(h3);

}

}
