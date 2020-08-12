class DonutMaker {
  constructor() {
    this.donutCount = 0;
    this.donutMultiplierCount = 0;
    this.donutMultiplierCost = 10;
    this.autoClickerCount = 0;
    this.autoClickerCost = 50;
  }

  clickDonut() {
    this.donutCount += 1 * this.calculateDonutMultiplierValue();
  }

  getClickCount() {
    return Math.round(this.donutCount);
  }

  getDonutMultiplierCount() {
    return this.donutMultiplierCount;
  }

  getDonutMultiplierCost() {
    return this.donutMultiplierCost;
  }

  getAutoClickerCount() {
    return this.autoClickerCount;
  }

  getAutoClickerCost() {
    return this.autoClickerCost;
  }

  buyAutoClicker() {
    this.autoClickerCount += 1;
    this.subtractAutoClickerCostFromDonutCount();
    this.increaseAutoClickerCost();
  }

  subtractAutoClickerCostFromDonutCount() {
    this.donutCount -= Math.round(this.autoClickerCost);
  }

  increaseAutoClickerCost() {
    this.autoClickerCost += this.autoClickerCost * 0.1;
  }

  hasInsufficientDonutsToBuyAutoClicker() {
    return this.donutCount < this.autoClickerCost;
  }

  checkDonutCountToBuyAutoClicker() {
    if (this.hasInsufficientDonutsToBuyAutoClicker()) {
      throw new Error("Not enough donuts to purchase.");
    } else {
      this.buyAutoClicker();
    }
  }

  activateAutoClickers() {
    for (let i = 0; i < this.autoClickerCount; i++) {
      this.clickDonut();
    }
  }

  buyDonutMultiplier() {
    this.donutMultiplierCount += 1;
    this.subtractDonutMultiplierCostFromDonutCount();
    this.increaseDonutMultiplierCost();
  }

  subtractDonutMultiplierCostFromDonutCount() {
    this.donutCount -= Math.round(this.donutMultiplierCost);
  }

  increaseDonutMultiplierCost() {
    this.donutMultiplierCost += this.donutMultiplierCost * 0.1;
  }

  hasInsufficientDonutsToBuyDonutMultiplier() {
    return this.donutCount < this.donutMultiplierCost;
  }

  checkDonutCountToBuyDonutMultiplier() {
    if (this.hasInsufficientDonutsToBuyDonutMultiplier) {
      throw new Error("Not enough donuts to purchase.");
    } else {
      this.buyDonutMultiplier;
    }
  }

  calculateDonutMultiplierValue() {
    return Math.pow(1.2, this.donutMultiplierCount);
  }
}
