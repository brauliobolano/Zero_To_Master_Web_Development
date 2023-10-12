var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var randomButton = document.getElementById("random")
setGradient() //The colour inputs match the background generated on the first page load



function setGradient() {
	body.style.background = "linear-gradient(to right, "  //(to right, red , yellow);
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"; 
	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
  // Generate random values for the red, green, and blue components
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Convert the values to two-digit hexadecimal and format as a CSS color
  const randomHexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

  // Return the random hexadecimal color for additional use (optional)
  return randomHexColor;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener('click', function() {
  color1.value = generateRandomColor();
  color2.value = generateRandomColor();
  setGradient();
});