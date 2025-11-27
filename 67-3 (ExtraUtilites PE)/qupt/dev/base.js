EUCore.setTier1Add("baseGenerator", "Base Generator", "generator_base", {defaultValues: {burn: 0, burnMax: 0}, getGuiScreen: function () {
    return UIBaseGen;
}, tick: function () {
    var rfStorage = this.getEnergyStorage();
    if (this.data.burn > 0) {
        if (this.data.energy < rfStorage) {
            this.data.energy = Math.min(this.data.energy + 20, rfStorage);
            this.data.burn--;
        }
    } else {
        this.data.burn = this.data.burnMax = this.getFuel("slot") / 4;
    }
    this.container.setScale("fire", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("rfScale", this.data.energy / rfStorage);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn) {
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
        if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
            var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
            fuelSlot.id = empty.id;
            fuelSlot.data = empty.data;
            return 20000;
        }
    }
    return 0;
}, isGenerator: function () {
    return true;
}, getEnergyStorage: function () {
    return 100000;
}, energyTick: EUCore.isGeneratorFunc});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.baseGenerator, count: 1, data: 0}, ["bbb", "b#b", "a1a"], ["#", 42, 0, "a", 331, 0, "b", 265, -1, "1", 61, -1]);
});

