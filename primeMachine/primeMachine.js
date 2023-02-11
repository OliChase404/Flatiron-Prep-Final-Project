
const button = document.querySelector("#activate");
const output = document.querySelector("#output");

let isPaused = true;
let counter = 1;


button.addEventListener("click", function() {
  isPaused = !isPaused;
  if (!isPaused) {
    button.innerHTML = "Pause";
    generatePrimes();
  } else {
    button.innerHTML = "Activate";
  }
});


function generatePrimes() {
  if (!isPaused) {
    let isPrime = true;
    for (let i = 2; i <= counter / 2; i++) {
      if (counter % i === 0) {
        isPrime = false;
        break;
      }
        }
        if (isPrime) {
        const prime = document.createElement("div");
        prime.classList.add("prime");
        prime.innerHTML = counter;
        output.appendChild(prime);
        
        document.getElementById('textBox').scrollTop = 
        prime.offsetHeight + prime.offsetTop;
        }
    counter++;
    setTimeout(generatePrimes, 1);
  }
}


