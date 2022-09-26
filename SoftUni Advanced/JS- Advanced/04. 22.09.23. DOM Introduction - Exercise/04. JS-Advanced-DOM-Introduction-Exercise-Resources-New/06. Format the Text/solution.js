function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  output.innerHTML = "";
  let inputArr = input.split('.');
  let buffer = [];

  while(inputArr.length > 0) {
    let line = inputArr.shift()
    if (line.length === 0) {
      continue;
    }
    buffer.push(line);
    
    if (buffer.length === 3) {
      output.innerHTML += `<p>${buffer.join('. ')}.</p>`;
      buffer = [];
    }
  }
  if (buffer.length > 0) {
    output.innerHTML += `<p>${buffer.join('. ')}.</p>`;
  }
  
  
}
