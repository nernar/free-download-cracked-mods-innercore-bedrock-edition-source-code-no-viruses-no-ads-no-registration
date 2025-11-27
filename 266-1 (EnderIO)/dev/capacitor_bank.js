IDRegistry.genBlockID("capacitorBank");
Block.createBlockWithRotation("capacitorBank", [{name: "Vibrant capacitor bank", texture: [["capacitorBankVibrant", 0], ["capacitorBankVibrant", 0], ["capacitorBankVibrant", 0], ["capacitorBankVibrantFront", 0], ["capacitorBankVibrant", 0], ["capacitorBankVibrant", 0]], inCreative: true}], "opaque");
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.capacitorBank, count: 1, data: 0}, ["scs", "crc", "scs"], ["s", ItemID.electricalSteel, 0, "c", ItemID.octadicCapacitor, 0, "r", 152, 0]);
});
MachineRegistry.registerPrototype(BlockID.capacitorBank, {defaultValues: {maxOutput: 1000}, isStorage: true, getGuiScreen: function () {
    return bankGUI;
}, tick: function () {
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    this.container.setText("textInfo", this.data.energy + "/" + this.getEnergyStorage() + " RF");
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge0"), this.data.energy, 2048, 1);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge1"), this.data.energy, 2048, 1);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge2"), this.data.energy, 2048, 1);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotCharge3"), this.data.energy, 2048, 1);
}, getEnergyStorage: function () {
    return 25000000;
}, energyTick: function (type, src) {
    this.data.energy += src.storage(Math.min(this.data.maxOutput * 4, this.getEnergyStorage() - this.data.energy), Math.min(this.data.maxOutput, this.data.energy));
}});

