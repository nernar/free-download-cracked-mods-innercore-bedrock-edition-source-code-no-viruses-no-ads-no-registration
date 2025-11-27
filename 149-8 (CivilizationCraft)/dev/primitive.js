IDRegistry.genBlockID("machineGeneratorPrimal");
Block.createBlockWithRotation("machineGeneratorPrimal", [{name: "Primal generator", texture: [["primitiveGenerator", 1], ["primitiveGenerator", 1], ["primitiveGenerator", 1], ["primitiveGenerator", 0], ["primitiveGenerator", 1], ["primitiveGenerator", 1]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.machineGeneratorPrimal, 3.5);
ToolAPI.registerBlockMaterial(BlockID.machineGeneratorPimal, "stone", 2, true);
Callback.addCallback("PostLoaded", function () {
    for (i in craftingHammers) {
        RecipeSystem.addRecipeToWorkbench(BlockID.machineGeneratorPrimal, 1, 0, [[ItemID.plateIron, 0], [BlockID.machineBlockBasic, 0], [ItemID.plateIron, 0], [ItemID.plateIron, 0], [ItemID.electronicPiston, 0], [ItemID.plateIron, 0], [ItemID.plateIron, 0], [ItemID.electronicMotor, 0], [ItemID.plateIron, 0]], craftingHammers[i]);
    }
});
var primalGeneratorGUI = new UI.StandartWindow({standart: {header: {text: {text: "Primal generator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 505, y: 230, bitmap: "furnBurn_0", scale: 3.2}, {type: "bitmap", x: 600, y: 230, bitmap: "energy_bar0", scale: 3.2}], elements: {"fuelSlot": {type: "slot", x: 505, y: 280}, "fuelScale": {type: "scale", x: 505, y: 230, bitmap: "furnBurn_1", scale: 3.2, direction: 1}, "energyScale": {type: "scale", x: 600, y: 230, bitmap: "energy_bar1", scale: 3.2}, "textInfo": {type: "text", x: 600, y: 200, width: 300, height: 30, text: "Energy: "}}});
MachineRegistry.registerPrototype(BlockID.machineGeneratorPrimal, {defaultValues: {burn: 0, burnMax: 0, isActive: false}, getGuiScreen: function () {
    return primalGeneratorGUI;
}, tick: function () {
    let slotFuel = this.container.getSlot("fuelSlot");
    if (this.data.burn > 0) {
        this.container.setScale("fuelScale", this.data.burn / this.data.burnMax);
    }
    this.container.setScale("energyScale", this.data.energy / 10000);
    FUEL = Fuel.getBurnTime(slotFuel.id, slotFuel.data);
    this.container.setText("textInfo", "Energy: " + this.data.energy + "/" + this.getEnergyStorage());
    if (FUEL) {
        this.data.burnMax = FUEL;
        if (this.data.burn == 0 && this.data.energy < 10000) {
            slotFuel.count--;
            this.data.burn += FUEL;
            this.activate();
        }
    }
    if (!FUEL) {
        this.data.burnMax = 0;
        this.deactivate();
    }
    if (this.data.burn > 0) {
        this.data.burn--;
        if (this.data.energy + 20 < this.getEnergyStorage()) {
            this.data.energy += 20;
        }
    }
    this.container.validateAll();
}, isGenerator: function () {
    return true;
}, getEnergyStorage: function () {
    return 10000;
}, energyTick: function (type, src) {
    var output = Math.min(20, this.data.energy);
    this.data.energy += src.add(output) - output;
}, activate: MachineRegistry.activateMachine, deactivate: MachineRegistry.deactivateMachine, destroy: this.deactivate});

