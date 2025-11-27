IDRegistry.genBlockID("energyConverter");
Block.createBlock("energyConverter", [{name: "Converter", texture: [["conv_bottom", 0], ["conv_top", 0], ["conv_side", 0]], inCreative: true}], "opaque");
var iron = 42;
ModAPI.addAPICallback("ICore", function (api) {
    iron = BlockID.machineBlockBasic;
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.energyConverter, count: 1, data: 0}, ["xcx", "cbc", "xcx"], ["c", 266, 0, "x", iron, 0, "b", 152, 0]);
});
var guiConverter = new UI.StandartWindow({standart: {header: {text: {text: "Energy converter"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 144, bitmap: "energy_scale_0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 530, y: 144, direction: 1, value: 0.5, bitmap: "energy_scale_1", scale: 3.2}, "textInfo1": {type: "text", x: 642, y: 142, width: 300, height: 30, text: "0/"}, "textInfo2": {type: "text", x: 642, y: 172, width: 350, height: 30, text: "10000 EU/RF"}}});
MachineRegistry.registerPrototype(BlockID.energyConverter, {defaultValues: {energy: 0}, isStorage: true, getGuiScreen: function () {
    return guiConverter;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("energyScale", this.data.energy / energyStorage);
    this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
}, getEnergyStorage: function () {
    return 10000;
}, energyTick: function (type, src) {
    var TRANSFER = 32;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}});

