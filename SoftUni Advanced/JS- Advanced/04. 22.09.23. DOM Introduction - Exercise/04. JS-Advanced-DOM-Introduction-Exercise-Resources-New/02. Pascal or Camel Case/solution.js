function solve() {
  let inputText = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let textArray = inputText.split(' ');
  let outputText = "";

  switch (convention) {
    case 'Camel Case': textArray.forEach((element, index) => {
      if (index === 0) {
        element = element.toLowerCase();
      } else {
        element = `${element[0].toUpperCase()}${element.substring(1).toLowerCase()}`;
      }
      outputText += element;
    });
      break;
    case 'Pascal Case': textArray.forEach(element => {
      element = `${element[0].toUpperCase()}${element.substring(1).toLowerCase()}`
      outputText += element;
    });
      break;
    default: outputText = "Error!";
  }

  document.getElementById("result").textContent = outputText;
}

