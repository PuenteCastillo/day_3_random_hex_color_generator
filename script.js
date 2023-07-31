// description: this function generates a random number between 0 and 100

//? variables
let generateBtn = document.querySelector(".generate");
let output = document.querySelector(".number");
let colorContainer = document.querySelector(".counter-div");

//? events
// on click event
generateBtn.addEventListener("click", function () {
  generateRandomHexColor();
});

//? methods
function generateRandomHexColor() {
  const randomColor = Math.random().toString(16).slice(2, 8);
  output.innerHTML = "#" + randomColor;
  colorContainer.style.backgroundColor = "#" + randomColor;
}
