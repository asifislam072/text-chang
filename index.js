const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

const changeFontSize = (Event) => {
  mainElement.style.fontSize = Event.target.value;
}
const changeBgColor = (Event) => {
  mainElement.style.fontFamily = Event.target.value;
}

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);