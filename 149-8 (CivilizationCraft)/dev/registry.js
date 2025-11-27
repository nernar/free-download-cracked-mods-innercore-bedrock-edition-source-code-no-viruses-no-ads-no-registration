importLib("energylib", "*");
var CU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var MachineRegistry = {machineIDs: {}, isMachine: function (id) {
    return this.machineIDs[id];
}, registerPrototype: function (id, Prototype) {
    ICRender.getGroup("ic-wire").add(id, -1);
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
    ToolAPI.registerBlockMaterial(id, "stone", 1);
    Block.setDestroyTime(id, 3);
    TileEntity.registerPrototype(id, Prototype);
    EnergyTileRegistry.addEnergyTypeForId(id, CU);
}, activateMachine: function () {
    if (!this.data.isActive) {
        this.data.isActive = true;
    }
}, deactivateMachine: function () {
    if (this.data.isActive) {
        this.data.isActive = false;
    }
}, basicEnergyReceiveFunc: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.getAll(energyNeed);
}};

