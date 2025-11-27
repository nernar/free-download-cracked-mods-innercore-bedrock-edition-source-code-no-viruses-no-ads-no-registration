EUCore.setTier1Add("foodGenerator", "Food Generator", "generator_food", {defaultValues: {progress: 0}, getGuiScreen: function () {
    return UIMachine;
}, tick: function () {
    var rfStorage = this.getEnergyStorage();
    this.container.setScale("progress", this.data.progress / 150);
    this.container.setScale("rfScale", this.data.energy / rfStorage);
    this.setRecipeGen({id: 297, data: 0, rfGen: 3000});
    this.setRecipeGen({id: 260, data: 0, rfGen: 2000});
    this.setRecipeGen({id: 319, data: 0, rfGen: 500});
    this.setRecipeGen({id: 320, data: 0, rfGen: 4000});
    this.setRecipeGen({id: 322, data: 0, rfGen: 50000});
    this.setRecipeGen({id: 349, data: 0, rfGen: 500});
    this.setRecipeGen({id: 350, data: 0, rfGen: 3000});
    this.setRecipeGen({id: 360, data: 0, rfGen: 500});
    this.setRecipeGen({id: 466, data: 0, rfGen: 100000});
    this.setRecipeGen({id: 363, data: 0, rfGen: 500});
    this.setRecipeGen({id: 364, data: 0, rfGen: 4000});
    this.setRecipeGen({id: 365, data: 0, rfGen: 500});
    this.setRecipeGen({id: 366, data: 0, rfGen: 4000});
    this.setRecipeGen({id: 423, data: 0, rfGen: 500});
    this.setRecipeGen({id: 424, data: 0, rfGen: 3000});
}, isGenerator: function () {
    return true;
}, getEnergyStorage: function () {
    return 100000;
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
    Recipes.addShaped({id: BlockID.foodGenerator, count: 1, data: 0}, ["bbb", "b#b", "a1a"], ["#", BlockID.baseGenerator, 0, "a", 331, 0, "b", 265, -1, "1", 61, -1]);
});

