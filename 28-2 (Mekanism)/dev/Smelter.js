IDRegistry.genBlockID("EnergizedSmelter");
Block.createBlockWithRotation("EnergizedSmelter", [{name: "Energized Smelter", texture: [["EnergizedSmelterBottom", 0], ["EnergizedSmelterTop", 0], ["EnergizedSmelterBack", 0], ["EnergizedSmelterFront", 0], ["EnergizedSmelterLeft", 0], ["EnergizedSmelterRight", 0]], inCreative: true}]);
Block.registerDropFunction("EnergizedSmelter", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.EnergizedSmelter, count: 1, data: 0}, ["rbr", "vcv", "rbr"], ["v", 20, 0, "r", 331, 0, "b", ItemID.BasicControlCircuit, 0, "c", BlockID.SteelCasing, 0]);
});
var guiEnergizedSmelter = new UI.StandartWindow({standart: {header: {text: {text: "Energized Smelter"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 538, y: 230, bitmap: "GuiArrowUP", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 630, y: 230, bitmap: "GuiProgressC", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "progressScale": {type: "scale", x: 633, y: 233, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 525, y: 275}, "slotInput": {type: "slot", x: 525, y: 155}, "slotResult": {type: "slot", x: 750, y: 195, size: 100}}});
MachineRegistry.register(BlockID.EnergizedSmelter, {defaultValues: {energymax: 40000, energy_consumption: 20, work_time: 250, progress: 0}, getGuiScreen: function () {
    return guiEnergizedSmelter;
}, getTransportSlots: function () {
    return {input: ["slotInput"], output: ["slotResult"]};
}, tick: function () {
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot = this.container.getSlot("slotInput");
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    if (inSlot.id == 0) {
        this.data.progress = 0;
    }
    var result = Recipes.getFurnaceRecipeResult(inSlot.id, "iron");
    if (result) {
        var resultSlot = this.container.getSlot("slotResult");
        if (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                inSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    } else {
        this.data.progress = 0;
    }
    this.container.setScale("progressScale", this.data.progress);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("EnergizedSmelter", MachineRegistry.placeFunction);
IDRegistry.genBlockID("BasicSmeltingFactory");
Block.createBlockWithRotation("BasicSmeltingFactory", [{name: "Basic Smelting Factory", texture: [["EnergizedSmelterBottom", 0], ["BasicSmeltingFactoryTop", 0], ["BasicSmeltingFactoryBack", 0], ["BasicSmeltingFactoryFront", 0], ["BasicSmeltingFactoryLeft", 0], ["BasicSmeltingFactoryRight", 0]], inCreative: true}]);
Block.registerDropFunction("BasicSmeltingFactory", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.BasicSmeltingFactory, count: 1, data: 0}, ["rbr", "ici", "rbr"], ["i", 265, 0, "r", 331, 0, "b", ItemID.BasicControlCircuit, 0, "c", BlockID.EnergizedSmelter, 0]);
});
var guiBasicSmeltingFactory = new UI.StandartWindow({standart: {header: {text: {text: "Basic Smelting Factory"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 499, y: 200, bitmap: "ScaleBGDown", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 599, y: 200, bitmap: "ScaleBGDown", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 679, y: 200, bitmap: "ScaleBGDown", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "progressScale1": {type: "scale", x: 499, y: 200, direction: 3, value: 0, bitmap: "ScaleDown", scale: GUI_BAR_STANDART_SCALE}, "progressScale2": {type: "scale", x: 599, y: 200, direction: 3, value: 0, bitmap: "ScaleDown", scale: GUI_BAR_STANDART_SCALE}, "progressScale3": {type: "scale", x: 679, y: 200, direction: 3, value: 0, bitmap: "ScaleDown", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 385, y: 130}, "slotInput1": {type: "slot", x: 485, y: 130}, "slotInput2": {type: "slot", x: 585, y: 130}, "slotInput3": {type: "slot", x: 665, y: 130}, "slotResult1": {type: "slot", x: 485, y: 300}, "slotResult2": {type: "slot", x: 585, y: 300}, "slotResult3": {type: "slot", x: 665, y: 300}}});
MachineRegistry.register(BlockID.BasicSmeltingFactory, {defaultValues: {energymax: 60000, energy_consumption: 30, work_time: 250, progress1: 0, progress2: 0, progress3: 0}, getGuiScreen: function () {
    return guiBasicSmeltingFactory;
}, getTransportSlots: function () {
    return {input: ["slotInput1", "slotInput2", "slotInput3"], output: ["slotResult1", "slotResult2", "slotResult3"]};
}, tick: function () {
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot1 = this.container.getSlot("slotInput1");
    var inSlot2 = this.container.getSlot("slotInput2");
    var inSlot3 = this.container.getSlot("slotInput3");
    var result1 = Recipes.getFurnaceRecipeResult(inSlot1.id, "iron");
    var result2 = Recipes.getFurnaceRecipeResult(inSlot2.id, "iron");
    var result3 = Recipes.getFurnaceRecipeResult(inSlot3.id, "iron");
    if (inSlot1.id == 0) {
        this.data.progress1 = 0;
    }
    if (inSlot2.id == 0) {
        this.data.progress2 = 0;
    }
    if (inSlot3.id == 0) {
        this.data.progress3 = 0;
    }
    if (result1) {
        var resultSlot1 = this.container.getSlot("slotResult1");
        if (resultSlot1.id == result1.id && resultSlot1.data == result1.data && resultSlot1.count < 64 || resultSlot1.id == 0) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress1 += 1 / this.data.work_time;
            }
            if (this.data.progress1 >= 1) {
                inSlot1.count--;
                resultSlot1.id = result1.id;
                resultSlot1.data = result1.data;
                resultSlot1.count++;
                this.container.validateAll();
                this.data.progress1 = 0;
            }
        }
    } else {
        this.data.progress1 = 0;
    }
    if (result2) {
        var resultSlot2 = this.container.getSlot("slotResult2");
        if (resultSlot2.id == result2.id && resultSlot2.data == result2.data && resultSlot2.count < 64 || resultSlot2.id == 0) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress2 += 1 / this.data.work_time;
            }
            if (this.data.progress2 >= 1) {
                inSlot2.count--;
                resultSlot2.id = result2.id;
                resultSlot2.data = result2.data;
                resultSlot2.count++;
                this.container.validateAll();
                this.data.progress2 = 0;
            }
        }
    } else {
        this.data.progress2 = 0;
    }
    if (result3) {
        var resultSlot3 = this.container.getSlot("slotResult3");
        if (resultSlot3.id == result3.id && resultSlot3.data == result3.data && resultSlot3.count < 64 || resultSlot3.id == 0) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress3 += 1 / this.data.work_time;
            }
            if (this.data.progress3 >= 1) {
                inSlot3.count--;
                resultSlot3.id = result3.id;
                resultSlot3.data = result3.data;
                resultSlot3.count++;
                this.container.validateAll();
                this.data.progress3 = 0;
            }
        }
    } else {
        this.data.progress3 = 0;
    }
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    this.container.setScale("progressScale1", this.data.progress1);
    this.container.setScale("progressScale2", this.data.progress2);
    this.container.setScale("progressScale3", this.data.progress3);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("BasicSmeltingFactory", MachineRegistry.placeFunction);

