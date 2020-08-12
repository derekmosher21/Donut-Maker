const donutClicker = new DonutMaker();
setupDonutButton();
updateDonutCount();
checkDonutFundsToBuyAutoClicker();
checkDonutFundsToBuyDonutMultiplier();

function setupDonutButton() {
  const donutButton = document.querySelector(".donut");
  donutButton.addEventListener("click", () => {
    donutClicker.clickDonut();
    updateDonutCount();
    checkDonutFundsToBuyAutoClicker();
    checkDonutFundsToBuyDonutMultiplier();
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

function checkDonutFundsToBuyDonutMultiplier() {
  const DonutMultiplierButton = document.querySelector(".buyDonutMultiplierButton");
  if(donutClicker.hasInsufficientDonutsToBuyDonutMultiplier()) {
    DonutMultiplierButton.disabled = true;
  } else {
    DonutMultiplierButton.disabled = false;
  }
}

// buyAutoClickerButton.addEventListener("click", () => {
//   donutClicker.buyAutoClicker();
// });

// buyDonutMultiplierButton.addEventListener("click", () => {
//   donutClicker.buyDonutMultiplier();
// });
