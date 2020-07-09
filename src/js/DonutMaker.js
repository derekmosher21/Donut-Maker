class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
    }

    clickDonut() {
        this.donutCount += 1;
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
        this.autoClickerCount++;
        this.subtractAutoClickerCostFromDonutCount;
        this.increaseAutoClickerCost; 

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
            throw new Error ("Not enough donuts to purchase.");
        } else {
            this.buyAutoClicker();
        }
    }

    activateAutoClickers() {
        for(let i = 0; i<this.autoClickerCount; i++) {
            this.clickDonut();
        }
    }
}