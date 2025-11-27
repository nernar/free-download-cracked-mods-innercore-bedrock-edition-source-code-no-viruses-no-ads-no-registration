IDRegistry.genBlockID("Sawmill");
Block.createBlockWithRotation("Sawmill", [{name: "Precision Sawmill", texture: [["PrecisionSawmillBottom", 0], ["PrecisionSawmillTop", 0], ["PrecisionSawmillBack", 0], ["PrecisionSawmillFront", 0], ["PrecisionSawmillLeft", 0], ["PrecisionSawmillLeft", 0]], inCreative: true}]);
Block.registerDropFunction("Sawmill", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.Sawmill, count: 1, data: 0}, ["rbr", "lsl", "rbr"], ["b", ItemID.BasicControlCircuit, 0, "r", 265, 0, "s", BlockID.SteelCasing, 0, "l", ItemID.BioFuel, 0]);
});
var guiSawmill = new UI.StandartWindow({standart: {header: {text: {text: "Precision SawMill"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 565, y: 190, bitmap: "GuiProgressC", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 950, y: 135, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 500, y: 190, bitmap: "GuiArrowUP", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 135 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 480, y: 240}, "slotInput": {type: "slot", x: 480, y: 120}, "slotResult": {type: "slot", x: 670, y: 175}, "slotResult2": {type: "slot", x: 731, y: 175}, "progressScale": {type: "scale", x: 568, y: 193, direction: 0, value: 1, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDART_SCALE}}});
MachineRegistry.register(BlockID.Sawmill, {defaultValues: {energymax: 160000, energy_consumption: 3, work_time: 200, progress: 0}, getTransportSlots: function () {
    return {input: ["slotInput"], output: ["slotResult", "slotResult2"]};
}, getGuiScreen: function () {
    return guiSawmill;
}, tick: function () {
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot = this.container.getSlot("slotInput");
    var resultSlot = this.container.getSlot("slotResult");
    var dop = this.container.getSlot("slotResult2");
    if (inSlot.id == 0) {
        this.data.progress = 0;
    }
    var recSet = function (id, data, res, res2, ge) {
        if (inSlot.id == id && inSlot.data == data) {
            if (resultSlot.id == res.id && resultSlot.data == res.data && resultSlot.count <= Item.getMaxStack(res.id) - res.count || resultSlot.id == 0) {
                if (ge.data.energy >= ge.data.energy_consumption) {
                    ge.data.energy -= ge.data.energy_consumption;
                    ge.data.progress += 1;
                }
                if (ge.data.progress >= 200) {
                    inSlot.count--;
                    resultSlot.id = res.id;
                    resultSlot.data = res.data;
                    resultSlot.count += res.count;
                    dop.id = res2.id;
                    dop.data = res2.data;
                    dop.count += res2.count;
                    ge.container.validateAll();
                    ge.data.progress = 0;
                }
            }
        }
    };
    recSet(47, 0, {id: 5, data: 0, count: 3}, {id: 340, data: 0, count: 3}, this);
    recSet(54, 0, {id: 5, data: 0, count: 8}, {id: 0, data: 0, count: 0}, this);
    recSet(146, 0, {id: 5, data: 0, count: 8}, {id: 331, data: 0, count: 1}, this);
    recSet(324, 0, {id: 5, data: 0, count: 6}, {id: 0, data: 0, count: 0}, this);
    recSet(333, 0, {id: 5, data: 0, count: 5}, {id: 280, data: 0, count: 1}, this);
    recSet(5, 0, {id: 280, data: 0, count: 8}, {id: 0, data: 0, count: 0}, this);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setScale("progressScale", this.data.progress / 200);
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("Sawmill", MachineRegistry.placeFunction);

