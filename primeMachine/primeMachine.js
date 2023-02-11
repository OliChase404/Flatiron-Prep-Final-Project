
const button = document.querySelector("#activate");
const output = document.querySelector("#output");
// const outputWindow = document.getElementsByTagName("div")

let isPaused = true;
let counter = 1;

// function scrollDown() {
//     outputWindow.window.scrollBy(0, 100);
//   }

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
    }
    counter++;
    setTimeout(generatePrimes, 1);
    // scrollDown()
  }
}


