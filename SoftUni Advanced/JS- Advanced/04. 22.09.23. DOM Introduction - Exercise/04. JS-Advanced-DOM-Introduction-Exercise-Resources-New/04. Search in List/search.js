function search() {
  let cityList = Array.from(document.querySelectorAll('ul li'));
  let inputStr = document.getElementById("searchText").value;
  let matches = 0;
  for (let city of cityList) {
   let currCity = city.textContent;
   if (currCity.includes(inputStr)) {
      city.style.textDecoration = "underline";
      city.style.fontWeight = "bold";
      matches++;
   }
  }
  document.getElementById("result").innerText = `${matches} matches found`
 
}
