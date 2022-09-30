function solve() {

   let addButtons = Array.from(document.getElementsByClassName("product-add"));
   let total = 0;
   let productList = new Set();
   let outputText = document.getElementsByTagName('textarea')[0];

   let checkOutButton = document.getElementsByClassName("checkout")[0];
   checkOutButton.addEventListener('click', checkOut);

   let checkOutFlag = false;

   function checkOut () {
      checkOutFlag = true;
      let stringList = Array.from(productList).join(', ')
      outputText.textContent += `You bought ${stringList} for ${total.toFixed(2)}.`;
      checkOutButton.removeEventListener('click', checkOut);
   }

   for (let button of addButtons) {

      button.addEventListener('click', addFunc);
      let parrent = button.parentElement;
      let product = parrent.getElementsByClassName('product-title')[0];
      let price = parrent.getElementsByClassName("product-line-price")[0];

      function addFunc() {

         if(checkOutFlag) {
            return 
         }

         let message = `Added ${product.textContent} for ${Number(price.textContent).toFixed(2)} to the cart.\n`;
         outputText.textContent += message;
         total += Number(price.textContent);
         productList.add(product.textContent);
         console.log(price.textContent);
      }
   }

}

// function solve() {

//    let addButtons = Array.from(document.getElementsByClassName("product-add"));
//    let total = 0;
//    let productList = new Set();
//    let outputText = document.getElementsByTagName('textarea')[0];

//    let checkOutButton = document.getElementsByClassName("checkout")[0];
//    let checkOutFlag = false;

//    for (let button of addButtons) {
//       button.addEventListener('click', addFunc);
//    }

//    function addFunc(event) {

//       let parrent = event.path[2];
//       let product = parrent.getElementsByClassName('product-title')[0];
//       let price = parrent.getElementsByClassName("product-line-price")[0];
//       let message = `Added ${product.textContent} for ${Number(price.textContent).toFixed(2)} to the cart.\n`;

//       outputText.textContent += message;
//       total += Number(price.textContent);
//       productList.add(product.textContent);
    
//    }

//    checkOutButton.addEventListener('click', checkOut);

//    function checkOut () {
//       checkOutFlag = true;
//       let stringList = Array.from(productList)
//       outputText.textContent += `You bought ${stringList} for ${total.toFixed(2)}.`;
//       checkOutButton.removeEventListener('click', checkOut);

     
//          for (let b of addButtons) {
//             b.removeEventListener('click', addFunc)
//          }
      
//    }

// }