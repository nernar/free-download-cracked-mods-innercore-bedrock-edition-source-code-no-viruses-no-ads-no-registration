EUCore.setTier1Add("lavaGenerator", "Lava Generator", "generator_lava", {defaultValues: {}, getGuiScreen: function () {
    return UIMachineLava;
}, init: function () {
    this.liquidStorage.setLimit("lava", 16);
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    var slot1 = this.container.getSlot("slot1");
    var slot2 = this.container.getSlot("slot2");
    var empty = LiquidRegistry.getEmptyItem(slot1.id, slot1.data);
    if (empty && empty.liquid == "lava") {
        if (this.liquidStorage.getAmount("lava") <= 15 && (slot2.id == empty.id && slot2.data == empty.data && slot2.count < Item.getMaxStack(empty.id) || slot2.id == 0)) {
            this.liquidStorage.addLiquid("lava", 1);
            slot1.count--;
            slot2.id = empty.id;
            slot2.data = empty.data;
            slot2.count++;
            this.container.validateAll();
        }
    }
    if (this.liquidStorage.getAmount("lava") > 0.001) {
        if (this.data.energy <= energyStorage - 50) {
            this.data.energy += 50;
            this.liquidStorage.addLiquid("lava", -0.001);
        }
    }
    this.liquidStorage.updateUiScale("lavaScale", "lava");
    this.container.setScale("rfScale", this.data.energy / 100000);
}, getEnergyStorage: function () {
    return 100000;
}, energyTick: EUCore.isGeneratorFunc});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.lavaGenerator, count: 1, data: 0}, ["bbb", "b#b", "a1a"], ["#", 42, 0, "a", 331, 0, "b", 266, -1, "1", 61, -1]);
});

