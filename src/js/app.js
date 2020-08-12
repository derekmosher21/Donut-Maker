const donutClicker = new DonutMaker();
setupDonutButton();
setupAllButtons();
updateAllCounts();
checkDonutFundsToBuyAutoClicker();
checkDonutFundsToBuyDonutMultiplier();

function setupDonutButton() {
  const donutButton = document.querySelector(".donut");
  donutButton.addEventListener("click", () => {
    donutClicker.clickDonut();
    setupAllButtons();
    updateAllCounts();
    checkDonutFundsToBuyAutoClicker();
    checkDonutFundsToBuyDonutMultiplier();
  });
}

function updateDonutCount() {
  const donutCountSpan = document.querySelector(".donut-count");
  donutCountSpan.innerText = donutClicker.getClickCount();
}

function updateAllCounts() {
  updateDonutCount();
  updateAutoClickerCount();
  updateDonutMultiplierCount();
}

function setupAllButtons() {
  setupAutoClickerButton();
  setupDonutMultiplierButton();
}

function setupAutoClickerButton() {
  const autoClickerButton = document.querySelector(".buyAutoClickerButton");
  autoClickerButton.addEventListener("click", () => {
    donutClicker.buyAutoClicker();
    updateAllCounts();
  });
}

function setupDonutMultiplierButton() {
  const DonutMultiplierButton = document.querySelector(
    ".buyDonutMultiplierButton"
  );
  DonutMultiplierButton.addEventListener("click", () => {
    donutClicker.buyDonutMultiplier();
    updateAllCounts();
  } )
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

// buyAutoClickerButton.addEventListener("click", () => {
//   donutClicker.buyAutoClicker();
// });

// buyDonutMultiplierButton.addEventListener("click", () => {
//   donutClicker.buyDonutMultiplier();
// });
