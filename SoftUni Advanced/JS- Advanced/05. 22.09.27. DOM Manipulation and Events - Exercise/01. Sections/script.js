function create(words) {
   let container = document.getElementById("content");
  
  

   for (let word of words) {
      let p = document.createElement('p');
      p.style.display = "none"
      p.textContent = word;

      let div = document.createElement('div');
      
      div.appendChild(p);
      container.appendChild(div);
      div.addEventListener('click', look);
   }

   function look (event) {
     event.currentTarget.children[0].style.display = '';
   } 
}