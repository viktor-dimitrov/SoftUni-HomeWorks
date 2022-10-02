function solve() {

  let inputBox = document.querySelectorAll('textarea')[0];
  let outputBox = document.querySelectorAll('textarea')[1];
  let genButton = document.querySelectorAll('button')[0];
  let buyButton = document.querySelectorAll('button')[1];

  genButton.addEventListener('click', genFunc);
  buyButton.addEventListener('click', buyFunc);

  let tbody = document.getElementsByTagName("tbody")[0];
 

  function genFunc(){
    let inArr = JSON.parse(inputBox.value);
   
    
    for (let obj of inArr) {
      let tr = document.createElement('tr')
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = obj.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      let name = document.createElement('p');
      name.textContent = obj.name;
      td2.appendChild(name);
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      let price = document.createElement('p');
      price.textContent = Number(obj.price);
      td3.appendChild(price);
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      let decFactor = document.createElement('p');
      decFactor.textContent = Number(obj.decFactor);
      td4.appendChild(decFactor);
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);

      tbody.appendChild(tr)
      
    }
  }
  


  
  function buyFunc(event){

    let products = [];
    let totalPrice = 0;
    let decFactors = [];
 
    let checkBoxes = document.getElementsByTagName('input');
    
    for (let check of checkBoxes) {
      
      
      if(check.checked) {
        let product = check.parentElement.parentElement;
        let info = product.querySelectorAll('p');
        products.push(info[0].textContent);
        totalPrice += Number(info[1].textContent);
        decFactors.push(Number(info[2].textContent));
        
      }
    }
    let avrFactors = decFactors.reduce((acc, num)=> acc + num, 0) / decFactors.length;

    outputBox.textContent += `Bought furniture: ${products.join(', ')}\r\n`
    outputBox.textContent += `Total price: ${totalPrice.toFixed(2)}\r\n`
    outputBox.textContent += `Average decoration factor: ${avrFactors}`;
  }
 
}