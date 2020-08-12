const donutClicker = new DonutMaker();
setupDonutButton();
updateDonutCount();
checkDonutFundsToBuyAutoClicker();

function setupDonutButton() {
  const donutButton = document.querySelector(".donut");
  donutButton.addEventListener("click", () => {
    donutClicker.clickDonut();
    updateDonutCount();
    checkDonutFundsToBuyAutoClicker();
  });
}

function updateDonutCount() {
  const donutCountSpan = document.querySelector(".donut-count");
  donutCountSpan.innerText = donutClicker.getClickCount();
}

function checkDonutFundsToBuyAutoClicker() {
  const autoClickerButton = document.querySelector(".buyAutoClickerButton");
  if(donutClicker.hasInsufficientDonutsToBuyAutoClicker()) {
    autoClickerButton.disabled = true;
  } else {
    autoClickerButton.disabled = false;
  }
}

// buyAutoClickerButton.addEventListener("click", () => {
//   donutClicker.buyAutoClicker();
// });

// buyDonutMultiplierButton.addEventListener("click", () => {
//   donutClicker.buyDonutMultiplier();
// });
