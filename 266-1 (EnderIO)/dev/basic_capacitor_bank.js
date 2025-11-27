IDRegistry.genBlockID("storageCapacitorBank");
Block.createBlockWithRotation("storageCapacitorBank", [{name: "Basic capacitor bank", texture: [["capacitorBank", 0], ["capacitorBank", 0], ["capacitorBank", 0], ["capacitorBankFront", 0], ["capacitorBank", 0], ["capacitorBank", 0]], inCreative: true}], "opaque");
var bankGUI = new UI.StandartWindow({standart: {header: {text: {text: "Capacitor bank"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 335, y: 140, bitmap: "redflux_bar0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 335, y: 140, direction: 1, bitmap: "redflux_bar1", scale: 3.2}, "textInfo": {type: "text", x: 500, y: 140, width: 350, height: 30, text: "0/"}, "slotCharge0": {type: "slot", x: 480, y: 300, bitmap: "chargeSlot"}, "slotCharge1": {type: "slot", x: 580, y: 300, bitmap: "chargeSlot"}, "slotCharge2": {type: "slot", x: 680, y: 300, bitmap: "chargeSlot"}, "slotCharge3": {type: "slot", x: 780, y: 300, bitmap: "chargeSlot"}}});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.storageCapacitorBank, count: 1, data: 0}, ["ici", "crc", "ici"], ["i", 265, 0, "c", ItemID.basicCapacitor, 0, "r", 152, 0]);
});
MachineRegistry.registerPrototype(BlockID.storageCapacitorBank, {defaultValues: {maxOutput: 1000}, isStorage: true, getGuiScreen: function () {
    return bankGUI;
}, tick: function () {
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    this.container.setText("textInfo", this.data.energy + "/" + this.getEnergyStorage() + " RF");
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge0"), this.data.energy, 2048, 0);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge1"), this.data.energy, 2048, 0);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge2"), this.data.energy, 2048, 0);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge3"), this.data.energy, 2048, 0);
}, getEnergyStorage: function () {
    return 1000000;
}, energyTick: function (type, src) {
    this.data.energy += src.storage(Math.min(this.data.maxOutput * 4, this.getEnergyStorage() - this.data.energy), Math.min(this.data.maxOutput, this.data.energy));
}});

