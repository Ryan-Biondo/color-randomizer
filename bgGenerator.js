const colorButton = document.getElementById("colorButton");
const colorCodeElement = document.getElementById("colorCode");

const textColorButton = document.getElementById("textColorButton");
const textColorCodeElement = document.getElementById("textColorCode");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeBackgroundColor() {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  colorCodeElement.textContent = "Hex Code: " + color;
}

function changeTextColor() {
  const color = getRandomColor();
  document.body.style.color = color;
  textColorCodeElement.textContent = "Text Color: " + color;
}

colorButton.addEventListener("click", changeBackgroundColor);
textColorButton.addEventListener("click", changeTextColor);