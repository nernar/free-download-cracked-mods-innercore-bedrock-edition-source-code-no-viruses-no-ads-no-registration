IDRegistry.genBlockID("FuelTank");
Block.createBlock("FuelTank", [{name: "(\u0411\u0430\u0437\u043e\u0432\u044b\u0439) \u0416\u0438\u0434\u043a\u043e\u0441\u0442\u043d\u044b\u0439 \u0431\u0430\u043a", texture: [["FTT", 0], ["FTT", 0], ["FTFB", 0], ["FTFB", 0], ["FTFB", 0], ["FTFB", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.FuelTank, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 1, z: 0.8});
Block.registerDropFunction("FuelTank", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.FuelTank, count: 1, data: 0}, ["iri", "r r", "iri"], ["r", 265, 0, "i", 331, 0]);
});
var guiBasicFuelTank = new UI.StandartWindow({standart: {header: {text: {text: "Basic Fuel Tank"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 150, bitmap: "BigFuelBG", scale: GUI_BAR_STANDART_SCALE}], elements: {"fuelScale": {type: "scale", x: 530 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "BigWaterScale", overlay: "OverBGFuel", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotOut": {type: "slot", x: 780, y: 200}, "slotIn": {type: "slot", x: 441, y: 200}}});
MachineRegistry.register(BlockID.FuelTank, {defaultValues: {fuelmode: 0, fuelmax: 0}, init: function () {
    this.liquidStorage.setLimit("water", 8);
}, getGuiScreen: function () {
    return guiBasicFuelTank;
}, getTransportSlots: function () {
    return {input: ["slotIn"], output: ["slotOut"]};
}, tick: function (type, src) {
    this.data.fuelmax = 24000;
    var content = this.container.getGuiContent();
    var inSlot = this.container.getSlot("slotIn");
    var resultSlot = this.container.getSlot("slotOut");
    if (inSlot.id == 325 && inSlot.data == 8 && this.data.fuel < this.data.fuelmax) {
        if (this.data.fuelmode == 0 || this.data.fuelmode == 1) {
            this.data.fuelmode = 1;
            this.data.fuel += 1000;
            inSlot.id = 325;
            inSlot.data = 0;
            this.container.validateAll();
        }
    }
    if (this.data.fuelmode == 1) {
        if (content) {
            content.elements["fuelScale"].bitmap = "BigWaterScale";
        }
    }
    this.container.setScale("fuelScale", this.data.fuel / this.data.fuelmax);
}, energyTick: function (type, src) {
    if (this.data.fuelmode == 1) {
        var output = Math.min(200, this.data.fuel);
        this.data.fuel += src.add(output) - output;
    }
}});

