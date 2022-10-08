
function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    let confPass = document.getElementById('confirm-password');
    let check = document.getElementById('company');

    let info = document.getElementById("companyInfo");
    let companyNumber = document.getElementById("companyNumber")

    let submit = document.getElementById('submit');
    let valid = document.getElementById('valid');

   check.addEventListener('change', checkFunc);
   function checkFunc(e){
    if (check.checked){
        info.style.display = "block"
    } else {
        info.style.display = 'none'
    }
   } 

   let userPat = /^[a-zA-Z0-9]{3,20}$/g
   let emailPat = /.*[@].*[.]{1,}.*/g
   let passPat = /^[\w]{5,15}$/g;

   let allCorrect = true
   
   submit.addEventListener('click', submitFunc);

   function submitFunc(e){
    e.preventDefault()
    if (userPat.test(username.value) == false) {
        username.style.borderColor = 'red';
        allCorrect = false;
    } else {
        username.style.borderColor = 'none'
    }
   
       if (!emailPat.test(email.value)) {
        email.style.borderColor = 'red';
        allCorrect = false;
    } else {
        email.style.borderColor = 'none'
    }
        
    if (passPat.test(pass.value) == false ||pass.value !== confPass.value) {
        pass.style.borderColor = 'red';
        confPass.style.borderColor = 'red';
        allCorrect = false;
       } else {
        pass.style.borderColor = 'none';
        confPass.style.borderColor = 'none'
       }

if(info.style.display != 'none'){
    if(Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
        companyNumber.style.borderColor = 'red';
        allCorrect = false;
       } else {
        companyNumber.style.borderColor = 'red';
       }

}
       if(allCorrect){
        valid.style.display = "block"
       } else {
        valid.style.display = 'none'
       }
       
   } 
}
