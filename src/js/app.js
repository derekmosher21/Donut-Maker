const donutClicker = new DonutMaker();


  donut.addEventListener("click", () => {
    donutClicker.addDonut();
  });
  
  buyAutoClickerButton.addEventListener("click", ()=> {
    donutClicker.buyAutoClicker();
  });
  
  buyDonutMultiplierButton.addEventListener("click",  ()=> {
    donutClicker.buyDonutMultiplier();
  });