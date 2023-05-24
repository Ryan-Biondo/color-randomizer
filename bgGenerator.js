// Get color button and color code element for background color
const colorButton = document.getElementById('colorButton');
const colorCodeElement = document.getElementById('colorCode');

// Get color button and color code element for text color
const textColorButton = document.getElementById('textColorButton');
const textColorCodeElement = document.getElementById('textColorCode');

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Change the background color of the webpage
function changeBackgroundColor() {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  colorCodeElement.textContent = 'Hex Code: ' + color;
}

// Change the text color of the webpage
function changeTextColor() {
  const color = getRandomColor();
  document.body.style.color = color;
  textColorCodeElement.textContent = 'Text Color: ' + color;
}

// Event listeners for the color buttons
colorButton.addEventListener('click', changeBackgroundColor);
textColorButton.addEventListener('click', changeTextColor);
