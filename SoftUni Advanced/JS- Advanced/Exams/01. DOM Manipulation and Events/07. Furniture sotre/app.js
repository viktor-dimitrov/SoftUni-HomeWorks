window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById("model");
    let year = document.getElementById("year");
    let description = document.getElementById("description");
    let price = document.getElementById("price");

    let addButton = document.getElementById("add");
    addButton.addEventListener('click', addFunc);

    let tbody = document.getElementById("furniture-list");
    let totalPrice = document.getElementsByClassName("total-price")[0];
    let total = 0;

let inputArr = [model, year, description, price];

    function addFunc (e) {
        e.preventDefault();
    for(let el of inputArr) {
        if (!el.value) {
            return
        }
    }
    if ( year < 0 || price < 0) {
        return
    }

    let tr1 = document.createElement('tr');
    tr1.setAttribute('class', 'info')
    let tdModel = document.createElement('td');
    tdModel.textContent = `${model.value}`;
    tr1.appendChild(tdModel);
    let tdPrice = document.createElement('td');
    tdPrice.textContent = `${Number(price.value).toFixed(2)}`;
    tr1.appendChild(tdPrice);

    let tdButtons = document.createElement('td');

    let moreButton = document.createElement('button');
    moreButton.setAttribute('class', 'moreBtn');
    moreButton.textContent = 'More Info';
    moreButton.addEventListener('click', moreFunc);
    tdButtons.appendChild(moreButton);

    let buyButton = document.createElement('button');
    buyButton.setAttribute('class', 'buyBtn');
    buyButton.textContent = "Buy it";
    buyButton.addEventListener("click", buyFunc);
    tdButtons.appendChild(buyButton);

    tr1.appendChild(tdButtons);

    let tr2 = document.createElement('tr');
    tr2.setAttribute("class", "hide");
  
    
    let tdYear = document.createElement('td');
    tdYear.textContent = `Year: ${year.value}`;
    tr2.appendChild(tdYear);

    let tdDesc = document.createElement('td');
    tdDesc.setAttribute('colSpan', 3);
    tdDesc.textContent = `Description: ${description.value}`;
    tr2.appendChild(tdDesc);

    tbody.appendChild(tr1);
    tbody.appendChild(tr2);

    for(let inputs of (inputArr)){
        inputs.value = "";
    }


    }

function moreFunc(e) {
    e.preventDefault()
    let btn = e.target;
    let classHide = Array.from(document.querySelectorAll('.hide'));

    if (btn.textContent === "More Info") {
        btn.textContent = "Less Info";
        classHide.forEach(element => {
            element.style.display = "contents"
        });
    } else {
        btn.textContent = "More Info";
        classHide.forEach(element => {
            element.style.display = "none"
        });
    }
}

function buyFunc(e) {
    e.preventDefault()

    let parent = e.target.parentElement.parentElement;
    let currPrice = parent.children[1]
   
    total += Number(currPrice.textContent);
    totalPrice.textContent = `${Number(total).toFixed(2)}`;

    parent.remove();
    
}

}
