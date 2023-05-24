// Get color wheel and body element
const colorWheel = document.getElementById('color-wheel');
const bodyElement = document.body;

function handleColorChange(event) {
  // Get the bounding rectangle of the color wheel
  const boundingRect = colorWheel.getBoundingClientRect();

  // Calculate the center coordinates of the color wheel
  const centerX = boundingRect.width / 2;
  const centerY = boundingRect.height / 2;

  // Calculate the coordinates of the click relative to the color wheel
  const x = event.clientX - boundingRect.left;
  const y = event.clientY - boundingRect.top;

  // Calculate the angle of the click using Math.atan2
  const angle = Math.atan2(y - centerY, x - centerX);

  // Convert the angle to degrees and adjust the offset to align with the color wheel
  let degrees = (angle * 180) / Math.PI;
  degrees += 90;

  // Round the degrees to get the hue value
  const hue = Math.round(degrees);

  // Create the new color value using HSL format
  const newColor = `hsl(${hue}, 100%, 50%)`;

  // Update the background color of the color wheel and body element
  colorWheel.style.backgroundColor = newColor;
  bodyElement.style.backgroundColor = newColor;

  // Log the new color value to the console
  console.log(newColor);
}

// Add the click event listener to the color wheel
colorWheel.addEventListener('click', handleColorChange);
