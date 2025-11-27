IDRegistry.genBlockID("theVat");
Block.createBlock("theVat", [{"name": "The Vat", "texture": [["machineBottom", 0]], "inCreative": true}]);
function setVatRender() {
    var vatRender = new ICRender.Model();
    BlockRenderer.setStaticICRender(BlockID.theVat, 0, vatRender);
    var model = BlockRenderer.createModel();
    model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 4 / 16, 16 / 16, "machineBottom", 0);
    model.addBox(9 / 16, 4 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "machineBottom", 0);
    model.addBox(0 / 16, 4 / 16, 0 / 16, 7 / 16, 16 / 16, 16 / 16, "machineBottom", 0);
    model.addBox(7 / 16, 4 / 16, 4 / 16, 9 / 16, 11 / 16, 12 / 16, "machineBottom", 0);
    model.addBox(7 / 16, 8 / 16, 4 / 16, 9 / 16, 10 / 16, 18 / 16, "machineBottom", 0);
    model.addBox(7 / 16, 12 / 16, 4 / 16, 9 / 16, 14 / 16, 12 / 16, "machineBottom", 0);
    vatRender.addEntry(model);
}
Block.setBlockShape(BlockID.theVat, {"x": 0, "y": 0, "z": 0}, {"x": 1, "y": 1, "z": 1});
setVatRender();
var VatGUI = new UI.StandartWindow({standart: {header: {text: {text: "The Vat"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 335, y: 140, bitmap: "redflux_bar0", scale: 3.2}, {type: "bitmap", x: 550, y: 130, bitmap: "vat_gui", scale: 4}, {type: "bitmap", x: 663, y: 440, bitmap: "fire_scale0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 335, y: 140, direction: 1, bitmap: "redflux_bar1", scale: 3.2}, "slotInput0": {type: "slot", x: 555, y: 140, bitmap: "empty", isTransparentBackground: true}, "slotInput1": {type: "slot", x: 753, y: 140, bitmap: "empty", isTransparentBackground: true}, "liquidScale": {type: "scale", x: 657, y: 225, direction: 1, bitmap: "fluid_scale", scale: 3}, "progressScale": {type: "scale", x: 663, y: 440, direction: 1, bitmap: "fire_scale1", scale: 3.2}, "slot2": {type: "slot", x: 740, y: 400, bitmap: "slot_fluid_full"}, "slot1": {type: "slot", x: 800, y: 400, bitmap: "slot_fluid_empty"}}});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.theVat, count: 1, data: 0}, ["ici", "rmr", "ifi"], ["i", ItemID.electricalSteel, 0, "c", 380, 0, "r", BlockID.reservoir, 0, "f", 61, 0, "m", BlockID.machineChassi, 0]);
    MachineRecipe.addVatRecipe([[363, 0], [376, 0]], {liquid: "nutrientDistillation", usedLiquid: "water"});
    MachineRecipe.addVatRecipe([[365, 0], [376, 0]], {liquid: "nutrientDistillation", usedLiquid: "water"});
    MachineRecipe.addVatRecipe([[319, 0], [376, 0]], {liquid: "nutrientDistillation", usedLiquid: "water"});
    MachineRecipe.addVatRecipe([[367, 0], [353, 0]], {liquid: "nutrientDistillation", usedLiquid: "water"});
    MachineRecipe.addVatRecipe([[296, 0], [353, 0]], {liquid: "hootch", usedLiquid: "water"});
    MachineRecipe.addVatRecipe([[295, 0], [353, 0]], {liquid: "hootch", usedLiquid: "water"});
    MachineRecipe.addVatRecipe([[392, 0], [353, 0]], {liquid: "hootch", usedLiquid: "water"});
    MachineRecipe.addVatRecipe([[377, 0], [331, 0]], {liquid: "fireWater", usedLiquid: "hootch"});
    MachineRecipe.addVatRecipe([[289, 0], [331, 0]], {liquid: "rocketFuel", usedLiquid: "hootch"});
});
MachineRegistry.registerPrototype(BlockID.theVat, {defaultValues: {progress: 0}, getGuiScreen: function () {
    return VatGUI;
}, getTransportSlots: function () {
    return {input: ["slotInput0, slotInput1"]};
}, init: function () {
    this.liquidStorage.setLimit(null, 1);
}, tick: function () {
    this.liquidStorage.updateUiScale("liquidScale", this.liquidStorage.getLiquidStored());
    let input0 = this.container.getSlot("slotInput0");
    let input1 = this.container.getSlot("slotInput1");
    let storage = this.liquidStorage;
    let recipe = MachineRecipe.getVatRecipe(input0.id, input0.data, input1.id, input1.data);
    this.container.setScale("progressScale", this.data.progress / 1000);
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    if (recipe && storage.getLiquidStored() == recipe.usedLiquid && this.data.energy >= 40) {
        this.data.energy -= 40;
        this.data.progress++;
        if (this.data.progress >= 1000) {
            storage.getLiquid(recipe.usedLiquid, 1);
            storage.addLiquid(recipe.liquid, 1);
            this.data.progress = 0;
            input0.count--;
            input1.count--;
            this.container.validateAll();
        }
    } else {
        this.data.progress = 0;
    }
    var liquid = storage.getLiquidStored();
    var slot1 = this.container.getSlot("slot1");
    var slot2 = this.container.getSlot("slot2");
    var empty = LiquidRegistry.getEmptyItem(slot1.id, slot1.data);
    if (empty && this.data.progress == 0 && (!liquid || empty.liquid == liquid)) {
        if (storage.getAmount(empty.liquid) <= 15 && (slot2.id == empty.id && slot2.data == empty.data && slot2.count < Item.getMaxStack(empty.id) || slot2.id == 0)) {
            storage.addLiquid(empty.liquid, 1);
            slot1.count--;
            slot2.id = empty.id;
            slot2.data = empty.data;
            slot2.count++;
            this.container.validateAll();
        }
    }
    if (liquid) {
        var full = LiquidRegistry.getFullItem(slot1.id, slot1.data, liquid);
        if (full && this.data.progress == 0 && storage.getAmount(liquid) >= 1 && (slot2.id == full.id && slot2.data == full.data && slot2.count < Item.getMaxStack(full.id, full.data) || slot2.id == 0)) {
            storage.getLiquid(liquid, 1);
            slot1.count--;
            slot2.id = full.id;
            slot2.data = full.data;
            slot2.count++;
            this.container.validateAll();
        }
    }
}, getEnergyStorage: function () {
    return 1000000;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});

