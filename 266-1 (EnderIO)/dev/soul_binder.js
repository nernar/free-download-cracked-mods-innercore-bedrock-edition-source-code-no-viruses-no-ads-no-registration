IDRegistry.genBlockID("soulBinder");
Block.createBlock("soulBinder", [{"name": "Soul binder", "texture": [["blockSoulMachineBottom", 0], ["blockSoulMachineBottom", 0], ["blockSoulBinder", 0], ["blockSoulBinder", 1], ["blockSoulBinder", 2], ["blockSoulBinder", 3]], "inCreative": true}]);
function setSoulBinderRender() {
    var soulBinderRender = new ICRender.Model();
    var model = BlockRenderer.createModel();
    model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 3 / 16, 16 / 16, "blockSoulMachineBottom", 0);
    model.addBox(14.5 / 16, 3 / 16, 14.5 / 16, 15.5 / 16, 14 / 16, 15.5 / 16, "blockSoulMachineBottom", 0);
    model.addBox(0 / 16, 14 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "blockSoulMachineBottom", 0);
    model.addBox(0.5 / 16, 3 / 16, 14.5 / 16, 1.5 / 16, 14 / 16, 15.5 / 16, "blockSoulMachineBottom", 0);
    model.addBox(14.5 / 16, 3 / 16, 0.5 / 16, 15.5 / 16, 14 / 16, 1.5 / 16, "blockSoulMachineBottom", 0);
    model.addBox(0.5 / 16, 3 / 16, 0.5 / 16, 1.5 / 16, 14 / 16, 1.5 / 16, "blockSoulMachineBottom", 0);
    model.addBox(2 / 16, 3 / 16, 2 / 16, 14 / 16, 14 / 16, 14 / 16, "blockSoulMachineBottom", 0);
    model.addBox(14 / 16, 5 / 16, 4 / 16, 15 / 16, 13 / 16, 12 / 16, "creeperSkull", 0);
    model.addBox(4 / 16, 5 / 16, 14 / 16, 12 / 16, 13 / 16, 15 / 16, "zombieSkull", 0);
    model.addBox(4 / 16, 5 / 16, 1 / 16, 12 / 16, 13 / 16, 2 / 16, "skeletonSkull", 0);
    model.addBox(1 / 16, 5 / 16, 4 / 16, 2 / 16, 13 / 16, 12 / 16, "endermanSkull", 0);
    soulBinderRender.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.soulBinder, -1, soulBinderRender);
}
setSoulBinderRender();
Block.setBlockShape(BlockID.soulBinder, {"x": 0, "y": 0, "z": 0}, {"x": 1, "y": 1, "z": 1});
var SoulBinderGUI = new UI.StandartWindow({standart: {header: {text: {text: "Soul binder"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 335, y: 140, bitmap: "redflux_bar0", scale: 3.2}, {type: "bitmap", x: 600, y: 205, bitmap: "bar_progress0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 335, y: 140, direction: 1, bitmap: "redflux_bar1", scale: 3.2}, "progressScale": {type: "scale", x: 600, y: 205, bitmap: "bar_progress1", scale: 3.2}, "slotInput0": {type: "slot", x: 450, y: 200}, "slotInput1": {type: "slot", x: 510, y: 200}, "slotOutput0": {type: "slot", x: 700, y: 200}, "slotOutput1": {type: "slot", x: 760, y: 200}, "capacitorSlot": {type: "slot", x: 325, y: 320}, "text": {type: "text", x: 400, y: 100, width: 100, height: 30, text: "RF"}}});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.soulBinder, count: 1, data: 0}, ["shs", "hmh", "shs"], ["s", ItemID.soulariumIngot, 0, "h", 397, -1, "a", 258, 0, "c", 359, 0, "m", BlockID.machineChassi, 0]);
    MachineRecipe.addSoulBinderRecipe([ItemID.soulVesselEnderman, ItemID.vibrantCrystal], {id: ItemID.soulVesselEmpty, second: ItemID.enderCrystal});
});
MachineRegistry.registerPrototype(BlockID.soulBinder, {defaultValues: {progress: 0, progressMax: 700, standartSpeed: 1, energyUsage: 80, maxEnergyStorage: 100000}, oldValues: {standartSpeed: 1, energyUsage: 80, maxEnergyStorage: 100000}, getGuiScreen: function () {
    return SoulBinderGUI;
}, tick: function () {
    this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    let input0 = this.container.getSlot("slotInput0");
    let input1 = this.container.getSlot("slotInput1");
    let output0 = this.container.getSlot("slotOutput0");
    let output1 = this.container.getSlot("slotOutput1");
    let recipe = MachineRecipe.getSoulBinderRecipe([input0.id, input1.id]);
    if (recipe && (output0.id == recipe.result && output0.count < 64 && output1.id == recipe.second && output1.count < 64 || output0.id == 0 && output1.id == 0)) {
        if (this.data.energy >= this.data.energyUsage) {
            this.data.progress += this.data.standartSpeed;
            this.data.energy -= this.data.energyUsage;
        }
        if (this.data.progress >= this.data.progressMax) {
            input0.count--;
            input1.count--;
            output0.id = recipe.result;
            output1.id = recipe.second;
            output0.count++;
            output1.count++;
            this.data.progress = 0;
            this.container.validateAll();
        }
    } else {
        if (this.data.progress > 0) {
            this.data.progress = 0;
        }
    }
    let slotCapacitor = this.container.getSlot("capacitorSlot");
    let upgrade = UpgradeAPI.getUpgradeData(slotCapacitor.id);
    if (upgrade) {
        this.data.standartSpeed = upgrade.speed;
        this.data.energyUsage = upgrade.usage * 3;
        this.data.maxEnergyStorage = upgrade.storage;
    } else {
        this.data.standartSpeed = this.oldValues.standartSpeed;
        this.data.energyUsage = this.oldValues.energyUsage;
        this.data.maxEnergyStorage = this.oldValues.maxEnergyStorage;
    }
    this.container.setText("text", this.data.energy + "/" + this.data.maxEnergyStorage);
    if (this.data.energy > this.data.maxEnergyStorage) {
        this.data.energy = this.data.maxEnergyStorage;
    }
}, getEnergyStorage: function () {
    return this.data.maxEnergyStorage;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});

