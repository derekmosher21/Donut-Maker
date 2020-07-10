const donutClicker = new DonutMaker(
    donutCount,
    autoClickerPrice,
    autoClickerCount,
    donutMultiplierCount,
    donutMultiplierPrice
  );

  donut.addEventListener("click", () => {
    donutClicker.addDonut();
  });
  
  buyAutoClickerButton.addEventListener("click", ()=> {
    donutClicker.buyAutoClicker();
  });
  
  buyDonutMultiplierButton.addEventListener("click",  ()=> {
    donutClicker.buyDonutMultiplier();
  });