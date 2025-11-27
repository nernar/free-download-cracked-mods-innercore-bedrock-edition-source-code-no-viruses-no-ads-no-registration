Translation.addTranslation("Combiner", {ru: "\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c"});
IDRegistry.genBlockID("Combiner");
Block.createBlockWithRotation("Combiner", [{name: "Combiner", texture: [["CombinerBottom", 0], ["CombinerTop", 0], ["CombinerBack", 0], ["CombinerFront", 0], ["CombinerLeft", 0], ["CombinerRight", 0]], inCreative: true}]);
Block.registerDropFunction("Combiner", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.Combiner, count: 1, data: 0}, ["aea", "bcb", "aea"], ["a", ItemID.ReinforcedAlloy, 0, "e", ItemID.EliteControlCircuit, 0, "c", BlockID.SteelCasing, 0, "b", 4, 0]);
});
var guiCombiner = new UI.StandartWindow({standart: {header: {text: {text: "Combiner"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 565, y: 220, bitmap: "FuelSlotMin", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 630, y: 230, bitmap: "GuiProgressC", scale: GUI_BAR_STANDART_SCALE}], elements: {"fuelScale": {type: "scale", x: 565 + GUI_BAR_STANDART_SCALE, y: 220 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "MCobblestoneScale", scale: GUI_BAR_STANDART_SCALE}, "energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "progressScale": {type: "scale", x: 633, y: 233, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 455, y: 215}, "slotFuel": {type: "slot", x: 550, y: 275}, "slotInput": {type: "slot", x: 550, y: 155}, "slotResult": {type: "slot", x: 750, y: 195, size: 100}}});
MachineRegistry.register(BlockID.Combiner, {defaultValues: {energymax: 20000, energy_consumption: 20, work_time: 250, progress: 0}, getGuiScreen: function () {
    return guiCombiner;
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
    if (fuelSlot.id == 4 && this.data.fuel < this.data.fuelmax) {
        fuelSlot.count--;
        this.data.fuel += 200;
        this.container.validateAll();
    }
    if (inSlot.id == 318 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = 13;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.OsmiumDust && inSlot.count == 8 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = BlockID.OsmiumOre;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 351 && inSlot.data == 4 && inSlot.count == 16 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = 21;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.GoldDust && inSlot.count == 8 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = 14;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.TinDust && inSlot.count == 8 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = BlockID.TinOre;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.IronDust && inSlot.count == 8 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = 15;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.ObsidianDust && inSlot.count == 4 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = 49;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 331 && inSlot.count == 16 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = 73;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.CopperDust && inSlot.count == 8 && this.data.fuel == 200) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            this.data.fuel -= 200;
            inSlot.count--;
            resultSlot.id = BlockID.CopperOre;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    this.container.setScale("progressScale", this.data.progress);
    this.container.setScale("fuelScale", this.data.fuel / this.data.fuelmax);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("Combiner", MachineRegistry.placeFunction);

