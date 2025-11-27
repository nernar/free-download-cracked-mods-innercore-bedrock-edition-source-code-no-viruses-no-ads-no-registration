IDRegistry.genBlockID("BioGenerator");
Block.createBlock("BioGenerator", [{name: "Bio Generator", texture: [["BGD", 0], ["BGT", 0], ["BGB", 0], ["BGF", 0], ["BGR", 0], ["BGR", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.BioGenerator, count: 1, data: 0}, ["rsr", "bcb", "isi"], ["r", 331, 0, "s", ItemID.EnrichedAlloy, 0, "i", 265, 0, "b", ItemID.BioFuel, 0, "c", ItemID.BasicControlCircuit, 0]);
});
var guiBioGenerator = new UI.StandartWindow({standart: {header: {text: {text: "Bio Generator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 350, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 500, y: 180, bitmap: "TextPanel", scale: 4}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "fuelScale": {type: "scale", x: 350 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 880, y: 190}, "slotFuel": {type: "slot", x: 400, y: 190}, "textInfo1": {type: "text", x: 510, y: 190, width: 200, height: 30, text: "0", font: {color: android.graphics.Color.GREEN}}, "textInfo2": {type: "text", x: 610, y: 190, width: 200, height: 30, text: "kJ", font: {color: android.graphics.Color.GREEN}}, "textInfo3": {type: "text", x: 510, y: 230, width: 200, height: 30, text: "\u0411\u0438\u043e\u0442\u043e\u043f\u043b\u0438\u0432\u043e:", font: {color: android.graphics.Color.GREEN}}, "textInfo5": {type: "text", x: 680, y: 230, width: 200, height: 30, text: "0", font: {color: android.graphics.Color.GREEN}}, "textInfo4": {type: "text", x: 510, y: 270, width: 200, height: 30, text: "\u0412\u044b\u0445\u043e\u0434: 700J/t", font: {color: android.graphics.Color.GREEN}}}});
MachineRegistry.register(BlockID.BioGenerator, {defaultValues: {energymax: 160000, biofuel: 0, biofuelmax: 24000}, getGuiScreen: function () {
    return guiBioGenerator;
}, isGenerator: function () {
    return true;
}, getTransportSlots: function () {
    return {input: ["slotFuel"]};
}, tick: function () {
    var content = this.container.getGuiContent();
    var energySlot = this.container.getSlot("slotEnergy");
    var fuelSlot = this.container.getSlot("slotFuel");
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 200, 2);
    if (fuelSlot.id == ItemID.BioFuel && this.data.biofuel < this.data.biofuelmax) {
        this.data.biofuel += 200;
        fuelSlot.count--;
        this.container.validateAll();
    }
    if (this.data.biofuel > 0 && this.data.energy < this.data.energymax) {
        this.data.energy += 350;
        this.data.biofuel--;
    }
    this.container.setText("textInfo1", this.data.energy / 1000);
    this.container.setText("textInfo5", this.data.biofuel);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setScale("fuelScale", this.data.biofuel / this.data.biofuelmax);
}, energyTick: function (type, src) {
    var output = Math.min(350, this.data.energy);
    this.data.energy += src.add(output) - output;
}});

