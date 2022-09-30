function addItem() {
    let text = document.getElementById("newItemText");
    let input = text.value;

    let addedElement = document.getElementById("items");
    let newItem = document.createElement("li");
    newItem.textContent = input;
    addedElement.appendChild(newItem);
    text.value = "";
}