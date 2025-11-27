EUCore.setTier1Add("solarGenerator", "Solar Generator", "generator_solar", {tick: function () {
    if (World.getLightLevel(this.x, this.y + 2, this.z) == 15) {
        this.data.energy += 50;
    }
}, getEnergyStorage: function () {
    return 100000;
}, isGenerator: function () {
    return true;
}, energyTick: EUCore.isGeneratorFunc});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.solarGenerator, count: 1, data: 0}, ["bbb", "2#2", "a1a"], ["#", 42, 0, "a", 331, 0, "b", 20, 0, "1", 61, -1, "2", 22, 0]);
});

