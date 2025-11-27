Translation.addTranslation("EnergyCube(Advanced)", {ru: "\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0439 \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u0443\u0431"});
IDRegistry.genBlockID("EnergyCubeAdvanced");
Block.createBlockWithRotation("EnergyCubeAdvanced", [{name: "EnergyCube(Advanced)", texture: [["ECA", 0], ["ECA", 0], ["ECA", 0], ["ECA", 0], ["ECA", 0], ["ECA", 0]], inCreative: true}]);
Block.registerDropFunction("EnergyCubeAdvanced", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.EnergyCubeAdvanced, count: 1, data: 0}, ["rtr", "scs", "rtr"], ["r", 331, 0, "s", 265, 0, "c", BlockID.EnergyCubeBasic, 0, "t", ItemID.EnergyTablet, -1]);
});
var guiEnergyCubeAdvanced = new UI.StandartWindow({standart: {header: {text: {text: "Energy Cube(Advanced)"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 150, bitmap: "BigFuelBG", scale: GUI_BAR_STANDART_SCALE}], elements: {"EnergyScale": {type: "scale", x: 531 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "BigEnergyScale", overlay: "OverBGFuel", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 780, y: 200}, "slotEnergyOut": {type: "slot", x: 441, y: 200}}});
MachineRegistry.register(BlockID.EnergyCubeAdvanced, {isStorage: true, getGuiScreen: function () {
    return guiEnergyCubeAdvanced;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("EnergyScale", this.data.energy / energyStorage);
    var TRANSFER = 500;
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergyOut"), Math.min(TRANSFER, energyStorage - this.data.energy), 3);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, TRANSFER, 3);
}, getEnergyStorage: function () {
    return 8000000;
}, energyTick: function (type, src) {
    var TRANSFER = 250;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}});
Block.registerPlaceFunction("EnergyCubeAdvanced", MachineRegistry.placeFunction);
Translation.addTranslation("EnergyCube(Elite)", {ru: "\u042d\u043b\u0438\u0442\u043d\u044b\u0439 \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u0443\u0431"});
IDRegistry.genBlockID("EnergyCubeElite");
Block.createBlock("EnergyCubeElite", [{name: "EnergyCube(Elite)", texture: [["ECE", 0]], inCreative: true}]);
Block.registerDropFunction("EnergyCubeElite", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.EnergyCubeElite, count: 1, data: 0}, ["rtr", "csc", "rtr"], ["r", 331, 0, "s", ItemID.EliteControlCircuit, 0, "c", BlockID.EnergyCubeAdvanced, 0, "t", ItemID.EnergyTablet, -1]);
});
var guiEnergyCubeElite = new UI.StandartWindow({standart: {header: {text: {text: "Energy Cube(Elite)"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 150, bitmap: "BigFuelBG", scale: GUI_BAR_STANDART_SCALE}], elements: {"EnergyScale": {type: "scale", x: 531 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "BigEnergyScale", overlay: "OverBGFuel", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 780, y: 200}, "slotEnergyOut": {type: "slot", x: 441, y: 200}}});
MachineRegistry.register(BlockID.EnergyCubeElite, {isStorage: true, getGuiScreen: function () {
    return guiEnergyCubeElite;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("EnergyScale", this.data.energy / energyStorage);
    var TRANSFER = 5000;
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergyOut"), Math.min(TRANSFER, energyStorage - this.data.energy), 3);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, TRANSFER, 3);
}, getEnergyStorage: function () {
    return 32000000;
}, energyTick: function (type, src) {
    var TRANSFER = 5000;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}});
Block.registerPlaceFunction("EnergyCubeElite", MachineRegistry.placeFunction);
IDRegistry.genBlockID("EnergyCubeUltimate");
Block.createBlock("EnergyCubeUltimate", [{name: "EnergyCube(Ultimate)", texture: [["ECU", 0]], inCreative: true}]);
Block.registerDropFunction("EnergyCubeUltimate", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.EnergyCubeUltimate, count: 1, data: 0}, [" t ", "scs", " t "], ["s", ItemID.UltimateControlCircuit, 0, "c", BlockID.EnergyCubeElite, 0, "t", ItemID.EnergyTablet, -1]);
});
var guiEnergyCubeUltimate = new UI.StandartWindow({standart: {header: {text: {text: "Energy Cube(Ultimate)"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 150, bitmap: "BigFuelBG", scale: GUI_BAR_STANDART_SCALE}], elements: {"EnergyScale": {type: "scale", x: 531 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "BigEnergyScale", overlay: "OverBGFuel", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 780, y: 200}, "slotEnergyOut": {type: "slot", x: 441, y: 200}}});
MachineRegistry.register(BlockID.EnergyCubeUltimate, {isStorage: true, getGuiScreen: function () {
    return guiEnergyCubeUltimate;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("EnergyScale", this.data.energy / energyStorage);
    var TRANSFER = 10000;
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergyOut"), Math.min(TRANSFER, energyStorage - this.data.energy), 3);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, TRANSFER, 3);
}, getEnergyStorage: function () {
    return 64000000;
}, energyTick: function (type, src) {
    var TRANSFER = 10000;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}});
Block.registerPlaceFunction("EnergyCubeUltimate", MachineRegistry.placeFunction);

