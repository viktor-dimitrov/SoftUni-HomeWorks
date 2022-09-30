function addItem() {
    let text = document.getElementById("newItemText");
    let input = text.value;

    let addedElement = document.getElementById("items");
    let newItem = document.createElement("li");
    newItem.textContent = input;

    addedElement.appendChild(newItem);
    text.value = "";

    let delButton = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    delButton.appendChild(linkText);
    delButton.href = "#";

    newItem.appendChild(delButton);
    addedElement.appendChild(newItem);

    delButton.addEventListener('click', delFunc);

    function delFunc(event) {
        event.target.parentElement.remove();
    }

}