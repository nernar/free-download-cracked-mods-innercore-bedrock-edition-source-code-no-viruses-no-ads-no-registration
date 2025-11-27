EUCore.setTier1Add("netherGenerator", "Nether Generator", "generator_nether", {defaultValues: {progress: 0}, getGuiScreen: function () {
    return UIMachine;
}, tick: function () {
    var rfStorage = this.getEnergyStorage();
    this.container.setScale("progress", this.data.progress / 150);
    this.container.setScale("rfScale", this.data.energy / rfStorage);
    this.setRecipeGen({id: 399, data: 0, rfGen: 800000});
}, isGenerator: function () {
    return true;
}, getEnergyStorage: function () {
    return 800000;
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
    Recipes.addShaped({id: BlockID.netherGenerator, count: 1, data: 0}, ["bcb", "b#b", "a1a"], ["#", 20, 0, "a", 331, 0, "b", 397, 1, "1", 61, -1, "c", 399, 0]);
});

