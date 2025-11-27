var MashineAdvApi = {machineIDs: {}, isMachine: function (id) {
    return this.machineIDs[id];
}, registerPrototype: function (id, Prototype) {
    this.machineIDs[id] = true;
    if (Prototype.defaultValues) {
        Prototype.defaultValues.energy = 0;
    } else {
        Prototype.defaultValues = {energy: 0};
    }
    if (!Prototype.getEnergyStorage) {
        Prototype.getEnergyStorage = function () {
            return 0;
        };
    }
    ToolAPI.registerBlockMaterial(id, "stone");
    TileEntity.registerPrototype(id, Prototype);
    EnergyTileRegistry.addEnergyTypeForId(id, energyRedstoneFlux);
}, basicEnergyReceiveFunc: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.getAll(energyNeed);
}};

