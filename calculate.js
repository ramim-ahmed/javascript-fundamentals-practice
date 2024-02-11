const keys = document.querySelector("#keys");
const display = document.querySelector("#display");
function calculateResult() {
  display.value = eval(display.value);
}
function del() {
  const value = display.value.substring(0, display.value.length - 1);
  display.value = value;
}
keys.addEventListener("click", function (e) {
  if (e.target.innerText === "C") {
    return (display.value = "");
  }
  if (e.target.innerText === "=") {
    return calculateResult();
  }
  if (e.target.innerText === "del") {
    return del();
  }
  display.value += e.target.innerText;
});
