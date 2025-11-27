EUCore.setTier1Add("pinkGenerator", "Pink Generator", "generator_pink", {defaultValues: {progress: 0}, getGuiScreen: function () {
    return UIMachine;
}, tick: function () {
    var rfStorage = this.getEnergyStorage();
    this.container.setScale("progress", this.data.progress / 150);
    this.container.setScale("rfScale", this.data.energy / rfStorage);
    this.setRecipeGen({id: 351, data: 9, rfGen: 300});
    this.setRecipeGen({id: 171, data: 6, rfGen: 300});
    this.setRecipeGen({id: 35, data: 6, rfGen: 300});
}, isGenerator: function () {
    return true;
}, getEnergyStorage: function () {
    return 10000;
}, energyTick: EUCore.isGeneratorFunc, setRecipeGen: function (rr) {
    var slot = this.container.getSlot("slot");
    var rfStorage = this.getEnergyStorage();
    if (this.data.energy < rfStorage && slot.id == rr.id && slot.data == rr.data && slot.count !== 0) {
        if (this.data.progress++ >= 149) {
            this.data.energy = Math.min(this.data.energy + rr.rfGen, rfStorage);
            this.data.progress = 0;
            slot.count--;
        }
    }
    if (slot.id == 0) {
        this.data.progress = 0;
    }
    if (slot.count == 0) {
        slot.id = 0;
    }
}});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.pinkGenerator, count: 1, data: 0}, ["bbb", "b#b", "a1a"], ["#", BlockID.baseGenerator, 0, "a", 331, 0, "b", 35, 6, "1", 61, -1]);
});

