IDRegistry.genBlockID("HeatGenerator");
Block.createBlock("HeatGenerator", [{name: "Heat Generator", texture: [["HGC", 0], ["HGT", 0], ["HGB", 0], ["HGF", 0], ["HGR1", 0], ["HGR", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.HeatGenerator, count: 1, data: 0}, ["iii", "wow", "cfc"], ["i", 265, 0, "w", 5, 0, "o", ItemID.ingotosmium, 0, "c", ItemID.copperingot, 0, "f", 61, 0]);
});
var guiHeatGenerator = new UI.StandartWindow({standart: {header: {text: {text: "Heat Generator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 150, bitmap: "BigFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}], elements: {"fuelScale": {type: "scale", x: 530 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "LavaScale", overlay: "OverBGFuel", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 780, y: 200}, "slotFuel": {type: "slot", x: 441, y: 200}, "textInfo1": {type: "text", x: 600, y: 330, width: 300, height: 30, text: "0/"}, "textInfo2": {type: "text", x: 600, y: 360, width: 300, height: 30, text: "25000 mB"}}});
MachineRegistry.register(BlockID.HeatGenerator, {defaultValues: {energymax: 160000, inSound: 0}, getGuiScreen: function () {
    return guiHeatGenerator;
}, getTransportSlots: function () {
    return {input: ["slotFuel"]};
}, isGenerator: function () {
    return true;
}, tick: function () {
    this.data.fuelmax = 25000;
    var energySlot = this.container.getSlot("slotEnergy");
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 200, 2);
    var fuelSlot = this.container.getSlot("slotFuel");
    if (fuelSlot["id"] > 0 && fuelSlot["count"] > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
            fuelSlot.count--;
            this.container.validateSlot("slotFuel");
            this.data.fuel += 100;
        }
        if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
            var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
            fuelSlot.id = empty.id;
            fuelSlot.data = empty.data;
            this.data.fuel += 1000;
        }
    }
    if (this.data.fuel >= 1 && this.data.energy < this.data.energymax) {
        this.data.energy += 60;
        this.data.fuel -= 10;
    }
    this.container.setText("textInfo1", this.data.fuel + "/");
    this.container.setScale("fuelScale", this.data.fuel / this.data.fuelmax);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
}, energyTick: function (type, src) {
    var output = Math.min(32, this.data.energy);
    this.data.energy += src.add(output) - output;
}});

