IDRegistry.genBlockID("machineElectricKiln");
Block.createBlockWithRotation("machineElectricKiln", [{name: "Electrical kiln", texture: [["primitiveGenerator", 1], ["primitiveGenerator", 1], ["primitiveGenerator", 1], ["electricalKiln", 0], ["primitiveGenerator", 1], ["primitiveGenerator", 1]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.machineElectricKiln, 3.5);
ToolAPI.registerBlockMaterial(BlockID.machineElectricKiln, "stone", 2, true);
Callback.addCallback("PostLoaded", function () {
    for (i in craftingHammers) {
        RecipeSystem.addRecipeToWorkbench(BlockID.machineElectricKiln, 1, 0, [[0, 0], [331, 0], [0, 0], [ItemID.plateIron, 0], [BlockID.alloyKilnController, 0], [ItemID.plateIron, 0], [ItemID.plateIron, 0], [ItemID.circuitRedIron, 0], [ItemID.plateIron, 0]], craftingHammers[i]);
    }
});
var electricKilnGUI = new UI.StandartWindow({standart: {header: {text: {text: "Kiln"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 600, y: 140, bitmap: "furnProg_0", scale: 3.2}, {type: "bitmap", x: 510, y: 230, bitmap: "electroFire0", scale: 3.2}], elements: {"ing0": {type: "slot", x: 650 - 200, y: 140}, "ing1": {type: "slot", x: 728 - 200, y: 140}, "fireScale": {type: "scale", x: 510, y: 230, bitmap: "electroFire1", scale: 3.2, direction: 1}, "res": {type: "slot", x: 700, y: 140}, "progressScale": {type: "scale", x: 600, y: 140, bitmap: "furnProg_1", scale: 3.2}}});
MachineRegistry.registerPrototype(BlockID.machineElectricKiln, {defaultValues: {progress: 0, progressMax: 165, isActive: false}, getGuiScreen: function () {
    return electricKilnGUI;
}, tick: function () {
    this.container.setScale("fireScale", this.data.energy / 10000);
    this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
    this.container.validateAll();
    let ing0 = this.container.getSlot("ing0");
    let ing1 = this.container.getSlot("ing1");
    let res = this.container.getSlot("res");
    let rec_ = RecipeSystem.kiln;
    for (i in rec_) {
        let rec = rec_[i];
        if (ing0.id == rec.ing0 && ing0.count >= rec.ingCount0 && ing0.data == rec.ingData0 && ing1.id == rec.ing1 && ing1.count >= rec.ingCount1 && ing1.data == rec.ingData1 && (res.id == rec.resId || res.id == 0) && res.count + rec.resCount <= 64 && res.data == rec.resData) {
            if (this.data.energy > 20 && this.data.progress < this.data.progressMax) {
                this.data.progress++;
                this.data.energy -= 10;
            }
            if (this.data.progress >= this.data.progressMax) {
                res.id = rec.resId;
                res.count += rec.resCount;
                res.data = rec.resData;
                ing0.count -= rec.ingCount0;
                ing1.count -= rec.ingCount1;
                this.data.progress = 0;
            }
        }
    }
    if (ing0.id == 0 && this.data.progress > 0) {
        this.data.progress = 0;
    }
}, isGenerator: function () {
    return false;
}, getEnergyStorage: function () {
    return 10000;
}, activate: MachineRegistry.activateMachine, deactivate: MachineRegistry.deactivateMachine, destroy: this.deactivate, energyTick: MachineRegistry.basicEnergyReceiveFunc});

