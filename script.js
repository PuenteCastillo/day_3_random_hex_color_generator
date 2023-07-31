// description: this function generates a random number between 0 and 100

//? variables
let generateBtn = document.querySelector(".generate");
let output = document.querySelector(".number");

//? events
// on click event
generateBtn.addEventListener("click", function () {
  generateRandomNumber();
});

//? methods
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  output.innerHTML = randomNumber;
  console.log(randomNumber);
}
