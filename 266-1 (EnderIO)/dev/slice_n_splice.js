IDRegistry.genBlockID("sliceAndSplice");
Block.createBlockWithRotation("sliceAndSplice", [{"name": "Slice 'n' splice", "texture": [["blockSoulMachineBottom", 0], ["blockSoulMachineTop", 0], ["blockSoulMachineSide", 0], ["sliceAndSpliceFront", 0], ["blockSoulMachineSide", 0], ["blockSoulMachineSide", 0]], "inCreative": true}]);
var SliceAndSpliceGUI = new UI.StandartWindow({standart: {header: {text: {text: "Slice 'n' splice"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 335, y: 140, bitmap: "redflux_bar0", scale: 3.2}, {type: "bitmap", x: 630, y: 235, bitmap: "bar_progress0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 335, y: 140, direction: 1, bitmap: "redflux_bar1", scale: 3.2}, "progressScale": {type: "scale", x: 630, y: 235, bitmap: "bar_progress2", scale: 3.2}, "slotInput0": {type: "slot", x: 400, y: 200}, "slotInput1": {type: "slot", x: 460, y: 200}, "slotInput2": {type: "slot", x: 520, y: 200}, "slotInput3": {type: "slot", x: 400, y: 260}, "slotInput4": {type: "slot", x: 460, y: 260}, "slotInput5": {type: "slot", x: 520, y: 260}, "slotOutput": {type: "slot", x: 720, y: 230}, "slotAxe": {type: "slot", x: 430, y: 140}, "slotShears": {type: "slot", x: 490, y: 140}, "capacitorSlot": {type: "slot", x: 325, y: 320}, "text": {type: "text", x: 400, y: 100, width: 100, height: 30, text: "RF"}}});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.sliceAndSplice, count: 1, data: 0}, ["shs", "amc", "sss"], ["s", ItemID.soulariumIngot, 0, "h", 397, -1, "a", 258, 0, "c", 359, 0, "m", BlockID.machineChassi, 0]);
    MachineRecipe.addSliceAndSpliceRecipe([ItemID.soulariumIngot, ItemID.zombieSkull, ItemID.soulariumIngot, ItemID.silicon, 331, ItemID.silicon], {id: ItemID.skullZombieController, data: 0});
});
var AXES = {258: true, 271: true, 274: true, 279: true, 286: true};
MachineRegistry.registerPrototype(BlockID.sliceAndSplice, {defaultValues: {progress: 0, progressMax: 1000, standartSpeed: 1, energyUsage: 80, maxEnergyStorage: 100000}, oldValues: {standartSpeed: 1, energyUsage: 160, maxEnergyStorage: 100000}, getGuiScreen: function () {
    return SliceAndSpliceGUI;
}, tick: function () {
    this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    let input0 = this.container.getSlot("slotInput0");
    let input1 = this.container.getSlot("slotInput1");
    let input2 = this.container.getSlot("slotInput2");
    let input3 = this.container.getSlot("slotInput3");
    let input4 = this.container.getSlot("slotInput4");
    let input5 = this.container.getSlot("slotInput5");
    let output = this.container.getSlot("slotOutput");
    let slotAxe = this.container.getSlot("slotAxe");
    let slotShears = this.container.getSlot("slotShears");
    let recipe = MachineRecipe.getSliceAndSpliceRecipe([input0.id, input1.id, input2.id, input3.id, input4.id, input5.id]);
    if (recipe && AXES[slotAxe.id] && slotShears.id == 359 && (output.id == recipe.id && output.count < 64 && output.data == recipe.data || output.id == 0)) {
        if (this.data.energy >= this.data.energyUsage) {
            this.data.progress += this.data.standartSpeed;
            this.data.energy -= this.data.energyUsage;
        }
        if (this.data.progress >= this.data.progressMax) {
            input0.count--;
            input1.count--;
            input2.count--;
            input3.count--;
            input4.count--;
            input5.count--;
            output.id = recipe.id;
            output.data = recipe.data;
            output.count++;
            slotAxe.data++;
            slotShears.data++;
            this.data.progress = 0;
            if (Math.random() <= 0.05) {
                if (rnd(0, 1) == 0) {
                    slotAxe.id = 0;
                } else {
                    slotShears.id = 0;
                }
            }
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
        this.data.energyUsage = upgrade.usage * 2;
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

