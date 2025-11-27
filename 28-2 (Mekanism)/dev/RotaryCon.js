IDRegistry.genBlockID("RotaryCondensentrator");
Block.createBlock("RotaryCondensentrator", [{name: "\u0420\u043e\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u0433\u0443\u0441\u0442\u0438\u0442\u0435\u043b\u044c", texture: [["RCD", 0], ["RCT", 0], ["RCF", 0], ["RCF", 0], ["RCR", 0], ["RCR", 0]], inCreative: true}]);
Block.registerDropFunction("RotaryCondensentrator", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.RotaryCondensentrator, count: 1, data: 0}, ["gbg", "zet", "gbg"], ["e", ItemID.EnergyTablet, -1, "t", BlockID.FuelTank, 0, "b", ItemID.BasicControlCircuit, 0, "g", 20, 0, "z", BlockID.BasicGazTank, 0]);
});
var guiRotaryCondensentrator = new UI.StandartWindow({standart: {header: {text: {text: "Rotary Condensentrator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 800, y: 430, bitmap: "EnergyHBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 430, y: 150, bitmap: "MediumFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 800, y: 150, bitmap: "MediumFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 580, y: 225, bitmap: "GuiProgress", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 800 + GUI_BAR_STANDART_SCALE, y: 430 + GUI_BAR_STANDART_SCALE, direction: 0, value: 0, bitmap: "EnergyHScale", scale: GUI_BAR_STANDART_SCALE}, "fuelScale": {type: "scale", x: 430 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "ScaleEtheneBig", overlay: "OverMediumFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "fuelScale1": {type: "scale", x: 800 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "ScaleEtheneBig", overlay: "OverMediumFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 900, y: 80}, "slotInput": {type: "slot", x: 350, y: 150}, "slotResult": {type: "slot", x: 350, y: 280}, "slotInput1": {type: "slot", x: 900, y: 150}, "slotResult1": {type: "slot", x: 900, y: 280}, "progressScale": {type: "scale", x: 580, y: 225, direction: 0, value: 0, bitmap: "GuiProgressScale", scale: GUI_BAR_STANDART_SCALE}}});
MachineRegistry.register(BlockID.RotaryCondensentrator, {defaultValues: {f1: 0, energymax: 20000, fuelmode: 0, energy_consumption: 20, work_time: 300, progress: 0}, getGuiScreen: function () {
    return guiRotaryCondensentrator;
}, getTransportSlots: function () {
    return {input: ["slotInput", "slotInput1"]};
}, tick: function (type, src) {
    this.data.fuelmax = 24000;
    var content = this.container.getGuiContent();
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot = this.container.getSlot("slotInput");
    var resultSlot = this.container.getSlot("slotResult");
    var inSlot1 = this.container.getSlot("slotInput1");
    var resultSlot1 = this.container.getSlot("slotResult1");
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setScale("fuelScale", this.data.fuel / this.data.fuelmax);
    this.container.setScale("fuelScale1", this.data.f1 / 24000);
    this.container.setScale("progressScale", this.data.progress);
    if (this.data.fuel < this.data.fuelmax) {
        if (inSlot.id == ItemID.EleB) {
            inSlot.id = 0;
            resultSlot.id = 325;
            resultSlot.data = 0;
            resultSlot.count = 1;
            this.data.fuel += 1000;
            this.data.fuelmode = 1;
            this.container.validateAll();
        }
    }
    if (this.data.fuelmode == 1) {
        if (content) {
            content.elements["fuelScale"].bitmap = "ScaleEtheneBig";
            content.elements["fuelScale1"].bitmap = "ScaleEtheneBig";
        }
    }
    if (this.data.fuel > 2 && this.data.f1 < 24000) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            this.data.fuel -= 2;
        }
        if (this.data.progress >= 1) {
            this.data.f1 += 200;
            this.data.progress = 0;
        }
    }
    if (this.data.f1 >= 1000 && inSlot1.id == 325) {
        resultSlot1.id = ItemID.GEleB;
        resultSlot1.data = 0;
        resultSlot.count1 = 1;
        inSlot1.count--;
        this.data.f1 -= 1000;
        this.container.validateAll();
    }
}, energyTick: MachineRegistry.basicEnergyReceiveFunc, getEnergyStorage: function () {
    return this.data.energymax;
}});

