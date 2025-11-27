EUCore.setTier1Add("potionGenerator", "Potion Generator", "generator_potion", {defaultValues: {progress: 0}, getGuiScreen: function () {
    return UIMachine;
}, tick: function () {
    var rfStorage = this.getEnergyStorage();
    this.container.setScale("progress", this.data.progress / 150);
    this.container.setScale("rfScale", this.data.energy / rfStorage);
    this.setRecipeGen({id: 373, rfGen: 30000});
}, isGenerator: function () {
    return true;
}, getEnergyStorage: function () {
    return 100000;
}, energyTick: EUCore.isGeneratorFunc, setRecipeGen: function (rr) {
    var slot = this.container.getSlot("slot");
    var rfStorage = this.getEnergyStorage();
    if (this.data.energy < rfStorage && slot.id == rr.id) {
        if (this.data.progress++ >= 149) {
            this.data.energy = Math.min(this.data.energy + rr.rfGen, rfStorage && slot.count !== 0);
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
    Recipes.addShaped({id: BlockID.potionGenerator, count: 1, data: 0}, ["bbb", "b#b", "a1a"], ["#", 116, 0, "a", 331, 0, "b", 49, -1, "1", 61, -1]);
});

