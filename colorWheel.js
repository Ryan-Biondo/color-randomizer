const colorWheel = document.getElementById("color-wheel");
const bodyElement = document.body;
    function handleColorChange(event) {
      const boundingRect = colorWheel.getBoundingClientRect();
      const x = event.clientX - boundingRect.left;
      const y = event.clientY - boundingRect.top;

      const centerX = boundingRect.width / 2;
      const centerY = boundingRect.height / 2;

      const angle = Math.atan2(y - centerY, x - centerX);
      const degrees = (angle * 180) / Math.PI;
      const hue = (degrees + 180) % 360;

      const newColor = `hsl(${hue}, 100%, 50%)`;
      colorWheel.style.backgroundColor = newColor;
      bodyElement.style.backgroundColor = newColor;

      console.log(newColor)
    }

    colorWheel.addEventListener("click", handleColorChange);