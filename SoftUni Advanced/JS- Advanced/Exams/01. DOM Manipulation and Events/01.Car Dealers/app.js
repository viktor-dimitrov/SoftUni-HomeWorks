window.addEventListener("load", solve);

function solve() {

 
  let tableBody = document.getElementById("table-body");

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', createTable);

  let carList = document.getElementById("cars-list");

  let profit = document.getElementById('profit');
  let profitNum = Number(profit.textContent)


  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");


  function createTable(e) {
  e.preventDefault()


    arr = [make, model, year, fuel, originalCost, sellingPrice];

    if (!make.value || !model.value || !year.value || !fuel.value || !originalCost.value || !sellingPrice.value || Number(sellingPrice.value) < Number(originalCost.value)) {
      return
    }

    let tr = document.createElement('tr');
    tr.classList.add('row');

    arr.forEach(element => {
      let td = document.createElement('td');
      td.textContent = element.value;
      tr.appendChild(td)

    });

    let btnTd = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.addEventListener('click', editFunc);

    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class','action-btn edit');
    btnTd.appendChild(editBtn);

    let sellBtn = document.createElement('button');
    sellBtn.addEventListener('click', sellFunc)

    sellBtn.textContent = 'Sell';
    sellBtn.setAttribute('class', 'action-btn sell');
    btnTd.appendChild(sellBtn);

    tr.appendChild(btnTd)

    tableBody.appendChild(tr);

    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";

  }

  function editFunc(e) {
    let data = e.target.parentElement.parentElement
    let elements = Array.from(e.target.parentElement.parentElement.children)

    make.value = elements[0].textContent
    model.value = elements[1].textContent
    year.value = elements[2].textContent
    fuel.value = elements[3].textContent;
    originalCost.value = elements[4].textContent;
    sellingPrice.value = elements[5].textContent;

    data.remove()

  }


  function sellFunc(e) {

    let data = e.target.parentElement.parentElement
    let elements = Array.from(e.target.parentElement.parentElement.children)

    let li = document.createElement('li');
    li.setAttribute('class', 'each-list')
    let span1 = document.createElement('span');
    span1.textContent = `${elements[0].textContent} ${elements[1].textContent}`;
    let span2 = document.createElement("span");
    span2.textContent = `${elements[2].textContent}`

    let diff = Math.abs(Number(elements[4].textContent) - Number(elements[5].textContent));

    let span3 = document.createElement('span');
    span3.textContent = diff;
    
    li.appendChild(span1)
    li.appendChild(span2)
    li.appendChild(span3)
    carList.appendChild(li);

    profitNum += diff;

    profit.textContent = profitNum.toFixed(2);

    data.remove()

  }
 
}
