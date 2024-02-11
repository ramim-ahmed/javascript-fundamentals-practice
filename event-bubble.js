const items = document.querySelector("#items");
const addButton = document.querySelector("#add");
const inputText = document.querySelector("#input");
items.addEventListener("click", function (event) {
  event.target.parentNode.removeChild(event.target);
});

addButton.addEventListener("click", function () {
  const newLi = document.createElement("li");
  newLi.innerText = inputText.value;
  items.appendChild(newLi);
  inputText.value = "";
});
