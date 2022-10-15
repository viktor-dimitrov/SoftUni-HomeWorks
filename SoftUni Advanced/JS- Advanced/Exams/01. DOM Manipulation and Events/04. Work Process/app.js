function solve() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let birth = document.getElementById("birth");
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");
    let button = document.getElementById("add-worker");
    button.addEventListener('click', hireWorkerFunc);
    let tbody = document.getElementById("tbody");
    let salarySpan = document.getElementById("sum");
    let salaryNum = 0;

    let inputsArr = [fname, lname, email, birth, position, salary];


    function hireWorkerFunc(e) {
        e.preventDefault();

        if (!fname.value || !lname.value || !email.value || !birth.value || !position.value || !salary.value ) {
            return
        }
        let tr =  document.createElement('tr');

        inputsArr.forEach(element => {

            let td = document.createElement('td');

            td.textContent = `${element.value}`
            tr.appendChild(td);
        });

        let buttonsParent = document.createElement('td');

        let buttonFired = document.createElement('button');
        buttonFired.addEventListener('click', firedFunc);
        buttonFired.setAttribute('class', 'fired');
        buttonFired.textContent = 'Fired';
        

        let buttonEdit = document.createElement('button');
        buttonEdit.addEventListener('click', editFunc);
        buttonEdit.setAttribute('class', 'edit');
        buttonEdit.textContent = 'Edit';
        buttonsParent.appendChild(buttonFired);
        buttonsParent.appendChild(buttonEdit);

        tr.appendChild(buttonsParent);
        tbody.appendChild(tr);

        salaryNum += Number(salary.value);
        salarySpan.textContent = salaryNum.toFixed(2);

        inputsArr.forEach(element => {
             element.value = '';            
        });

    }

 

    function firedFunc(e) {
        let data = e.target.parentElement.parentElement;
        let tdArr = Array.from(data.children);
        salaryNum -= Number(tdArr[5].textContent);
        salarySpan.textContent = salaryNum.toFixed(2);
        data.remove();

    }

    function editFunc(e) {
        e.preventDefault();
        let data = e.target.parentElement.parentElement;
        let tdArr = Array.from(data.children);
      
        for (let i = 0; i < inputsArr.length; i++) {
            inputsArr[i].value = `${tdArr[i].textContent}`;
        }
        salaryNum -= Number(tdArr[5].textContent);
        salarySpan.textContent = salaryNum.toFixed(2);
        data.remove();
    }

  
   


}
solve()