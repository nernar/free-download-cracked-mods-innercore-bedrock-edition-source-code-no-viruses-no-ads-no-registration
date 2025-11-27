EUCore.setTier1Add("redfluxGenerator", "Redflux Generator", "generator_redflux", {defaultValues: {progress: 0}, getGuiScreen: function () {
    return UIMachine;
}, tick: function () {
    var rfStorage = this.getEnergyStorage();
    this.container.setScale("progress", this.data.progress / 150);
    this.container.setScale("rfScale", this.data.energy / rfStorage);
    this.setRecipeGen({id: 331, rfGen: 5000});
    this.setRecipeGen({id: 152, rfGen: 50000});
}, isGenerator: function () {
    return true;
}, getEnergyStorage: function () {
    return 100000;
}, energyTick: EUCore.isGeneratorFunc, setRecipeGen: function (rr) {
    var slot = this.container.getSlot("slot");
    var rfStorage = this.getEnergyStorage();
    if (this.data.energy < rfStorage && slot.id == rr.id && slot.count !== 0) {
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
    Recipes.addShaped({id: BlockID.redfluxGenerator, count: 1, data: 0}, ["bbb", "b#b", "a1a"], ["#", BlockID.baseGenerator, 0, "a", 331, 0, "b", 152, -1, "1", 61, -1]);
});

