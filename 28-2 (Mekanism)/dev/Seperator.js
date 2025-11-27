IDRegistry.genBlockID("ElectrolyticSeparator");
Block.createBlock("ElectrolyticSeparator", [{name: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0435\u043f\u0430\u0440\u0430\u0442\u043e\u0440", texture: [["ESD", 0], ["EST", 0], ["ESB", 0], ["ESF", 0], ["ESR", 0], ["ESL", 0]], inCreative: true}]);
Block.registerDropFunction("ElectrolyticSeparator", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.ElectrolyticSeparator, count: 1, data: 0}, ["iri", "scs", "iri"], ["c", ItemID.ElectrolyticCore, 0, "s", ItemID.EnrichedAlloy, 0, "i", 265, 0, "r", 331, 0]);
});
var guiElectrolyticSeparator = new UI.StandartWindow({standart: {header: {text: {text: "Electrolytic Separator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 330, y: 150, bitmap: "MediumFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 550, y: 180, bitmap: "SmallFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 710, y: 180, bitmap: "SmallFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 640, y: 210, bitmap: "GuiProgressD", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "fuelScale": {type: "scale", x: 330 + GUI_BAR_STANDART_SCALE, y: 151 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "_liquid_water_texture", overlay: "OverMediumFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "fuelScale1": {type: "scale", x: 550 + GUI_BAR_STANDART_SCALE, y: 180 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "ScaleHydrogen", overlay: "OverSmallFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "fuelScale2": {type: "scale", x: 710 + GUI_BAR_STANDART_SCALE, y: 180 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "ScaleOxygen", overlay: "OverSmallFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 880, y: 200}, "slotFuel": {type: "slot", x: 400, y: 200}, "slotResult1": {type: "slot", x: 550, y: 290}, "slotResult2": {type: "slot", x: 710, y: 290}, "progressScale": {type: "scale", x: 640, y: 210, direction: 3, value: 0, bitmap: "GuiProgressDS", scale: GUI_BAR_STANDART_SCALE}}});
MachineRegistry.register(BlockID.ElectrolyticSeparator, {defaultValues: {f1: 0, f2: 0, energymax: 160000, fuelmodeR: 0, fuelmode: 0}, getGuiScreen: function () {
    return guiElectrolyticSeparator;
}, getTransportSlots: function () {
    return {input: ["slotFuel"]};
}, tick: function (type, src) {
    this.data.fuelmax = 24000;
    var content = this.container.getGuiContent();
    var energySlot = this.container.getSlot("slotEnergy");
    var fuelSlot = this.container.getSlot("slotFuel");
    var resultSlot1 = this.container.getSlot("slotResult1");
    var resultSlot2 = this.container.getSlot("slotResult2");
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setScale("fuelScale", this.data.fuel / this.data.fuelmax);
    this.container.setScale("fuelScale1", this.data.f1 / 2400);
    this.container.setScale("fuelScale2", this.data.f2 / 2400);
    if (resultSlot1.id == 325 && this.data.f1 >= 1000) {
        resultSlot1.id = ItemID.HydB;
        this.data.f1 -= 1000;
        this.container.validateAll();
    }
    if (resultSlot2.id == 325 && this.data.f2 >= 1000) {
        resultSlot2.id = ItemID.OxyB;
        this.data.f2 -= 1000;
        this.container.validateAll();
    }
    if (fuelSlot.id == 325 && fuelSlot.data == 8) {
        this.data.fuelmode = 1;
        if (this.data.fuelmode == 0 || this.data.fuelmode == 1) {
            if (this.data.fuelmode == 1) {
                fuelSlot.id = 325;
                fuelSlot.data = 0;
                this.data.fuel += 1000;
                this.container.validateAll();
            }
        }
    }
    if (this.data.fuel > 4 && this.data.energy >= 1000 && this.data.fuelmode == 1 && this.data.f1 < 2400 && this.data.f2 < 2400) {
        this.data.fuelmodeR = 1;
        this.data.f1 += 2;
        this.data.f2 += 1;
        this.data.energy -= 1000;
        this.data.fuel -= 4;
        if (content) {
            content.elements["fuelScale1"].bitmap = "ScaleHydrogen";
            content.elements["fuelScale2"].bitmap = "ScaleOxygen";
        }
    }
    if (this.data.fuel <= 0) {
        this.data.fuelmode = 0;
    }
    if (this.data.f1 == 0 && this.data.f2 == 0) {
        this.data.fuelmodeR = 0;
    }
}, energyTick: MachineRegistry.basicEnergyReceiveFunc, getEnergyStorage: function () {
    return this.data.energymax;
}});
Block.registerPlaceFunction("ElectrolyticSeparator", MachineRegistry.placeFunction);

