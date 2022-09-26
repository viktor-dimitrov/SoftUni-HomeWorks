function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let data = document.querySelectorAll("tbody tr");
     let pattern = document.getElementById("searchField").value;

     for (let line of data) {
      if (line.textContent.includes(pattern)) {
         line.classList.add("select");
      } else {
         line.classList.remove("select");
      }
     }
   }
}