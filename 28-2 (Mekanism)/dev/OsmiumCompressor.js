IDRegistry.genBlockID("OsmiumCompressor");
Block.createBlockWithRotation("OsmiumCompressor", [{name: "Osmium Compressor", texture: [["OsmiumCompressorBottom", 0], ["OsmiumCompressorTop", 0], ["OsmiumCompressorBack", 0], ["OsmiumCompressorFront", 0], ["OsmiumCompressorLeft", 0], ["OsmiumCompressorRight", 0]], inCreative: true}]);
Block.registerDropFunction("OsmiumCompressor", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.OsmiumCompressor, count: 1, data: 0}, ["sps", "vcv", "sps"], ["v", 325, 0, "s", ItemID.EnrichedAlloy, 0, "p", ItemID.AdvancedControlCircuit, 0, "c", BlockID.SteelCasing, 0]);
});
var guiOsmiumCompressor = new UI.StandartWindow({standart: {header: {text: {text: "Osmium Compressor"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 565, y: 220, bitmap: "FuelSlotMin", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 630, y: 230, bitmap: "GuiProgressC", scale: GUI_BAR_STANDART_SCALE}], elements: {"osmiumScale": {type: "scale", x: 565 + GUI_BAR_STANDART_SCALE, y: 220 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "OsmiumScroll", scale: GUI_BAR_STANDART_SCALE}, "energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "progressScale": {type: "scale", x: 633, y: 233, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 455, y: 215}, "slotFuel": {type: "slot", x: 550, y: 275}, "slotInput": {type: "slot", x: 550, y: 155}, "slotResult": {type: "slot", x: 750, y: 195, size: 100}}});
MachineRegistry.register(BlockID.OsmiumCompressor, {defaultValues: {energymax: 40000, energy_consumption: 20, work_time: 250, progress: 0}, getGuiScreen: function () {
    return guiOsmiumCompressor;
}, getTransportSlots: function () {
    return {input: ["slotInput"], output: ["slotResult"]};
}, tick: function () {
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    this.data.fuelmax = 200;
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot = this.container.getSlot("slotInput");
    var resultSlot = this.container.getSlot("slotResult");
    var fuelSlot = this.container.getSlot("slotFuel");
    if (inSlot.id == 0) {
        this.data.progress = 0;
    }
    if (fuelSlot.id == ItemID.ingotosmium && this.data.fuel < this.data.fuelmax) {
        fuelSlot.count--;
        this.data.fuel += 200;
        this.container.validateAll();
    }
    if (inSlot.id == ItemID.RefinedObsidianDust && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = ItemID.ObsidianIngot;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 348 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = ItemID.GlowstoneIngot;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    this.container.setScale("progressScale", this.data.progress);
    this.container.setScale("osmiumScale", this.data.fuel / this.data.fuelmax);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("OsmiumCompressor", MachineRegistry.placeFunction);

