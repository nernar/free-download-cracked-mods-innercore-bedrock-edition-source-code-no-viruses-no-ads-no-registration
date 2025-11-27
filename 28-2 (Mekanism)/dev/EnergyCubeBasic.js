Translation.addTranslation("EnergyCube(Basic)", {ru: "\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u0443\u0431"});
IDRegistry.genBlockID("EnergyCubeBasic");
Block.createBlockWithRotation("EnergyCubeBasic", [{name: "EnergyCube(Basic)", texture: [["ECB", 0], ["ECB", 0], ["ECB", 0], ["ECB", 0], ["ECB", 0], ["ECB", 0]], inCreative: true}]);
Block.registerDropFunction("EnergyCubeBasic", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.EnergyCubeBasic, count: 1, data: 0}, ["rtr", "scs", "rtr"], ["r", 331, 0, "s", 265, 0, "c", BlockID.SteelCasing, 0, "t", ItemID.EnergyTablet, -1]);
});
var guiEnergyCubeBasic = new UI.StandartWindow({standart: {header: {text: {text: "Energy Cube(Basic)"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 150, bitmap: "BigFuelBG", scale: GUI_BAR_STANDART_SCALE}], elements: {"EnergyScale": {type: "scale", x: 531 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "BigEnergyScale", overlay: "OverBGFuel", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 780, y: 200}, "slotEnergyOut": {type: "slot", x: 441, y: 200}}});
MachineRegistry.register(BlockID.EnergyCubeBasic, {getGuiScreen: function () {
    return guiEnergyCubeBasic;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("EnergyScale", this.data.energy / energyStorage);
    var TRANSFER = 500;
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergyOut"), Math.min(TRANSFER, energyStorage - this.data.energy), 3);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, TRANSFER, 3);
}, getEnergyStorage: function () {
    return 2000000;
}, energyTick: function (type, src) {
    var TRANSFER = 250;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}});
Block.registerPlaceFunction("EnergyCubeBasic", MachineRegistry.placeFunction);

