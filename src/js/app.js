const donutClicker = new DonutMaker();
runGame();

function runGame() {
  setupAllButtons();
  updateAllCounts();
}

function setupAllButtons() {
  setupDonutButton();
  setupAutoClickerButton();
  setupDonutMultiplierButton();
}

function setupDonutButton() {
  const donutButton = document.querySelector(".donut");
  donutButton.addEventListener("click", () => {
    donutClicker.clickDonut();
    updateAllCounts();
  });
}

function setupAutoClickerButton() {
  const autoClickerButton = document.querySelector(".buyAutoClickerButton");
  autoClickerButton.addEventListener("click", () => {
    donutClicker.buyAutoClicker();
    updateAllCounts();
    checkDonutFundsToBuyAutoClicker();
  });
}

function setupDonutMultiplierButton() {
  const DonutMultiplierButton = document.querySelector(
    ".buyDonutMultiplierButton"
  );
  DonutMultiplierButton.addEventListener("click", () => {
    donutClicker.buyDonutMultiplier();
    updateAllCounts();
    checkDonutFundsToBuyDonutMultiplier();
  });
}

function updateAllCounts() {
  updateDonutCount();
  updateAutoClickerCount();
  updateDonutMultiplierCount();
  updateDonutMultiplierValue();
}

function updateDonutCount() {
  const donutCountSpan = document.querySelector(".donut-count");
  donutCountSpan.innerText = donutClicker.getClickCount();
  checkDonutFundsToBuyAutoClicker();
  checkDonutFundsToBuyDonutMultiplier();
}

function updateAutoClickerCount() {
  const autoClickerCountSpan = document.querySelector(".auto-clicker-count");
  autoClickerCountSpan.innerText = donutClicker.getAutoClickerCount();
}

function updateDonutMultiplierCount() {
  const donutMultiplierCountSpan = document.querySelector(
    ".donut-multiplier-count"
  );
  donutMultiplierCountSpan.innerText = donutClicker.getDonutMultiplierCount();
}

function updateDonutMultiplierValue() {
  const donutMultiplierValueSpan = document.querySelector(".donut-multiplier-value");
  donutMultiplierValueSpan.innerText = donutClicker.calculateDonutMultiplierValue().toFixed(3);
}

function checkDonutFundsToBuyAutoClicker() {
  const autoClickerButton = document.querySelector(".buyAutoClickerButton");
  if (donutClicker.hasInsufficientDonutsToBuyAutoClicker()) {
    autoClickerButton.disabled = true;
  } else {
    autoClickerButton.disabled = false;
  }
}

function checkDonutFundsToBuyDonutMultiplier() {
  const DonutMultiplierButton = document.querySelector(
    ".buyDonutMultiplierButton"
  );
  if (donutClicker.hasInsufficientDonutsToBuyDonutMultiplier()) {
    DonutMultiplierButton.disabled = true;
  } else {
    DonutMultiplierButton.disabled = false;
  }
}
