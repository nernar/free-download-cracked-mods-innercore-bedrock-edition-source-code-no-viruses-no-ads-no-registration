let MysticalFlowerConfig = (function () {
    function MysticalFlowerConfig(patchRadius, patchCount, patchDensity, patchChance, tallChance) {
        this.patchRadius = patchRadius;
        this.patchCount = patchCount;
        this.patchDensity = patchDensity;
        this.patchChance = patchChance;
        this.tallChance = tallChance;
        return this;
    }
    MysticalFlowerConfig.prototype.getPatchRadius = function () {
        return this.patchRadius;
    };
    MysticalFlowerConfig.prototype.getPatchCount = function () {
        return this.patchCount;
    };
    MysticalFlowerConfig.prototype.getPatchDensity = function () {
        return this.patchDensity;
    };
    MysticalFlowerConfig.prototype.getPatchChance = function () {
        return this.patchChance;
    };
    MysticalFlowerConfig.prototype.getTallChance = function () {
        return this.tallChance;
    };
    return MysticalFlowerConfig;
}());

