const numberOfDiceInput = document.querySelector("#numberOfDice");
const numberOfSidesInput = document.querySelector("#numberOfSides");
const rollDiceButton = document.querySelector("#rollDice");
const resultsDiv = document.querySelector("#results");

rollDiceButton.addEventListener("click", function() {
  const numberOfDice = numberOfDiceInput.value;
  const numberOfSides = numberOfSidesInput.value;
  resultsDiv.innerHTML = "";
  let total = 0;
  for (let i = 0; i < numberOfDice; i++) {
    const result = Math.floor(Math.random() * numberOfSides) + 1;
    total += result;
    const resultElement = document.createElement("div");
    resultElement.innerHTML = "Dice " + (i + 1) + ": " + result;
    resultsDiv.appendChild(resultElement);
  }
  const totalElement = document.createElement("div");
  totalElement.innerHTML = "Total: " + total;
  resultsDiv.appendChild(totalElement);
});
