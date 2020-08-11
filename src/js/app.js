const donutClicker = new DonutMaker();
setupDonutButton();
updateDonutCount();

function setupDonutButton() {
  const donutButton = document.querySelector(".donut");
  donutButton.addEventListener("click", () => {
    donutClicker.clickDonut();
    updateDonutCount();
  });
}

function updateDonutCount() {
  const donutCountSpan = document.querySelector(".donut-count");
  donutCountSpan.innerText = donutClicker.getClickCount();
}

// buyAutoClickerButton.addEventListener("click", () => {
//   donutClicker.buyAutoClicker();
// });

// buyDonutMultiplierButton.addEventListener("click", () => {
//   donutClicker.buyDonutMultiplier();
// });
