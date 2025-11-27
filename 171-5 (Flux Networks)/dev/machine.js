importLib("energylib", "*");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var RF = EnergyTypeRegistry.assureEnergyType("RF", 1 / 4);
var MachineRegistry = {machineIDs: {}, isMachine: function (id) {
    return this.machineIDs[id];
}, registerPrototype: function (id, Prototype) {
    this.machineIDs[id] = true;
    if (Prototype.defaultValues) {
        Prototype.defaultValues.energy = 0;
    } else {
        Prototype.defaultValues = {energy: 0};
    }
    ICRender.getGroup("ic-wire").add(id, -1);
    ICRender.getGroup("rf-wire").add(id, -1);
    ToolAPI.registerBlockMaterial(id, "stone", 1);
    Block.setDestroyTime(id, 3);
    TileEntity.registerPrototype(id, Prototype);
    EnergyTileRegistry.addEnergyTypeForId(id, EU);
    EnergyTileRegistry.addEnergyTypeForId(id, RF);
}, basicEnergyReceiveFunc: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.get(energyNeed);
}};

